import React from 'react';
import { getCharacterData, getAssetPath, CHARACTER_LIST, ELEMENT_LIST } from './utils.js';
import CharacterCard from './CharacterCard.js';

class CharacterListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filtered: new Map(ELEMENT_LIST.map(x => [x, false])),
    };
  }

  setFiltered = e => this.setState((state, _) => ({filtered: new Map(state.filtered).set(e, !state.filtered.get(e))}));
  handleClick = e => this.setFiltered(e.currentTarget.getAttribute('element'));

  getFilteredList = () => CHARACTER_LIST.filter(c => !this.state.filtered.get(getCharacterData(c,'element')));

  render() { return (
    <div className="view" id="characterListView">
      <FilterBar filtered={this.state.filtered} handleClick={this.handleClick} />
      <CharacterList characters={this.getFilteredList()} {...this.props} />
    </div>
  )}
}

function FilterBar(props) { return (
  <ul id="filterBar">
    {ELEMENT_LIST.map(e => <FilterButton key={e} element={e} filtered={props.filtered.get(e)} handleClick={props.handleClick} />)}
  </ul>
)}

function FilterButton(props) { return (
  <button className={'filterButton' + (props.filtered ? ' activeFilter' : '')} element={props.element} onClick={props.handleClick}>
    <img className="filterButtonImg" src={getAssetPath('element', props.element)} alt="" />
  </button>
)}

function CharacterList(props) { return (
  <ul className="list" id="characterList">
    {props.characters.map(c => <CharacterListItem key={c} character={c} selected={props.selected.get(c)} handleClick={props.handleClick} />)}
  </ul>
)}

function CharacterListItem(props) { return (
  <li className={'characterListItem' + (props.selected ? ' selectedListItem' : '')} name={getCharacterData(props.character, 'name')} onClick={props.handleClick}>
    <CharacterCard character={props.character} />
  </li>
)}

export default CharacterListView;