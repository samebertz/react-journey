import React from 'react';
import './KApp.css';
import { getAssetPath } from './utils';

class KApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: true,
      selected: [],
    };
  }
//this.setState((state, props) => ({selected: state.selected.splice([e.target.key])}))
  render() {
    return (
      <div className="app">
        <button id="toggleView" onClick={() => this.setState({view: !this.state.view})} />
        { this.state.view
          ? <CharacterListView selected={this.state.selected} handleClick={e => {
              const k = e.currentTarget.getAttribute('name');
              this.setState((state, props) => ({selected: state.selected.concat([k])}));
              console.log(this.state)
            }} />
          : <MaterialListView input={this.state.selected} />
        }
        <span>{JSON.stringify(this.state.selected)}</span>
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
      filter: [],
    };
  }

  render() {
    return (
      <div className="view">
        <CharacterListFilter handleClick={e => this.setState((state, props) => ({filter: state.filter + e.target.getAttribute('name')}))} />
        <CharacterList {...this.props} />
      </div>
    );
  }
}

function CharacterListFilter(props) {
  const mock_ELEMENTS=['cryo', 'anemo'];
  return mock_ELEMENTS.map(e => <button key={e} name={e} className="toggleFilterElement" onClick={props.handleClick} />)
}

function CharacterList(props) {
  const mock_CHARACTER_DATA=[{name: 'Test'}, {name: 'Amber'}]
  return (
    <div className="characterList">
      {mock_CHARACTER_DATA.map(c => <CharacterListItem key={c.name} character={c} handleClick={props.handleClick} />)}
    </div>
  );
}

function CharacterListItem(props) {
  return (
    <div className="characterListItem" name={props.character.name} onClick={props.handleClick}>
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
      <MaterialList {...props} />
    </div>
  );
}

function MaterialList(props) {
  return (
    <div className="materialList">
      {getMaterialsFromCharacters(props.input).map(m => <MaterialListItem key={m} material={m} />)}
    </div>
  );
}

/**
 * TODO
 * util
 */
function getMaterialsFromCharacters(characters) {
  return ['testcommon', 'testlocal'];
}

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