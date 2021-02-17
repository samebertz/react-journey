import React from 'react';
import { CHARACTER_LIST, getCharacterData, getAssetPath, mock_ELEMENTS } from './utils.js';
import CharacterCard from './CharacterCard.js';

class CharacterListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: new Map(mock_ELEMENTS.map(x => [x, false])),
    };
  }

  handleClick = (e) => {
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
        <CharacterListFilter filter={this.state.filter} handleClick={this.handleClick} />
        <CharacterList characters={CHARACTER_LIST.filter(c => !this.state.filter.get(getCharacterData(c,'element')))} {...this.props} />
        <p>{JSON.stringify(Array.from(this.state.filter.entries()))}</p>
      </div>
    );
  }
}

function CharacterListFilter(props) {
  return mock_ELEMENTS.map(e => (
    <button key={e} element={e} className={'filterButton' + (props.filter.get(e) ? ' activeFilter' : '')} onClick={props.handleClick}>
      <img className="filterButtonImg" src={getAssetPath('element', e)} alt="" />
    </button> )
  );
}

function CharacterList(props) {
  console.log(props.characters)
  return (
    <div className="characterList">
      {props.characters.map(c => <CharacterListItem key={c} character={c} selected={props.selected.get(c)} handleClick={props.handleClick} />)}
    </div>
  );
}

function CharacterListItem(props) {
  return (
    <div className={'characterListItem' + (props.selected ? ' selectedListItem' : '')} name={getCharacterData(props.character, 'name')} onClick={props.handleClick}>
      <CharacterCard character={props.character} />
    </div>
  );
}

export default CharacterListView;