import React from 'react';
import './KApp.css';
import { getAssetPath } from './utils';

const mock_ELEMENTS = ['cryo', 'anemo', 'pyro'];
const mock_CHARACTER_DATA = new Map([
  ['Test', {name: 'Test', element:'cryo', local: 'glaze', common: 'mask'}],
  ['Amber', {name: 'Amber', element: 'pyro', local: 'chili', common: 'arrow'}],
]);

class KApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: true,
      selected: new Map(Array.from(mock_CHARACTER_DATA.keys()).map(x => [x, false])),
    };
  }
  
  selectListItem = (e) => {
    const k = e.currentTarget.getAttribute('name');
    this.setState((state, props) => {
      let s_ = new Map(state.selected.entries());
      s_.set(k, !s_.get(k));
      return {selected: s_};
    });
  }

  render() {
    return (
      <div className="app">
        <button id="toggleView" onClick={() => this.setState({view: !this.state.view})} />
        { this.state.view
          ? <CharacterListView selected={this.state.selected} handleClick={this.selectListItem} />
          : <MaterialListView input={this.state.selected} />
        }
        <p>{JSON.stringify(Array.from(this.state.selected.entries()))}</p>
      </div>
    );
  }
}

/**
 * Character list view
 */

class CharacterListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: new Map(mock_ELEMENTS.map(x => [x, false])),
    };
  }

  selectFilter = (e) => {
    const k = e.currentTarget.getAttribute('element');
    this.setState((state, props) => {
      let f_ = new Map(state.filter.entries())
      f_.set(k, !f_.get(k));
      return {filter: f_};
    });
  }

  render() {
    return (
      <div className="view">
        <CharacterListFilter filter={this.state.filter} handleClick={this.selectFilter} />
        <CharacterList characters={Array.from(mock_CHARACTER_DATA.values()).filter(c => !this.state.filter.get(c.element))} {...this.props} />
        <p>{JSON.stringify(Array.from(this.state.filter.entries()))}</p>
      </div>
    );
  }
}

function CharacterListFilter(props) {
  return mock_ELEMENTS.map(e => (
    <button key={e} element={e} className={'filterButton' + (props.filter.get(e) ? ' activeFilter' : '')} onClick={props.handleClick}>
      <img className="filterButtonImg" src={getAssetPath('element', e)} />
    </button> )
  );
}

function CharacterList(props) {
  return (
    <div className="characterList">
      {props.characters.map(c => <CharacterListItem key={c.name} character={(c)} selected={props.selected.get(c.name)} handleClick={props.handleClick} />)}
    </div>
  );
}

function CharacterListItem(props) {
  return (
    <div className={'character-card characterListItem' + (props.selected ? ' selectedListItem' : '')} name={props.character.name} onClick={props.handleClick}>
      <img className="character-card-element" src={getAssetPath('element', props.character.element)} />
      <img src={getAssetPath('character', props.character.name)} />
    </div>
  );
}

/**
 * Material list view
 */

function MaterialListView(props) {
  return (
    <div className="view">
      <MaterialList materials={materialsFromCharacters([...props.input.entries()].filter(x=>x[1]).map(x=>x[0]))} />
    </div>
  );
}

function MaterialList(props) {

  return (
    <div className="materialList">
      {props.materials.map(m => <MaterialListItem key={m} material={m} />)}
    </div>
  );
}

/**
 * TODO
 * util
 */
const materialsFromCharacters = characters => characters.flatMap(c => [mock_CHARACTER_DATA.get(c).local, mock_CHARACTER_DATA.get(c).common]);

function MaterialListItem(props) {
  return <img className="materialListItem" src={getAssetPath('materials', props.material)} alt={props.material} />;
}

/**
 * TODO
 * util
 */
// function getAssetPath(type, name) {
//   return './temp_assets/temp_element/temp_element.png';
// }

export default KApp;