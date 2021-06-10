import React from 'react';
import { getCharacterData, getAssetPath, CHARACTER_LIST, ELEMENT_LIST } from './utils.js';
import CharacterCard from './CharacterCard.js';

/**
 * class component for list view of characters with filter
 * @extends React.Component
 */
class CharacterListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filtered: new Map(ELEMENT_LIST.map(x => [x, false])),
    };
  }

  /**
   * @function setFiltered
   * @description toggles active state of a filter
   * @param {string} e - key in `this.state.filtered`
   */
  setFiltered = e => this.setState((state, _) => ({filtered: new Map(state.filtered).set(e, !state.filtered.get(e))}));
  /**
   * @function handleClick
   * @description handles click on a filter button by toggling it using {@link setFiltered}
   * @param {React.SyntheticEVent} e - React SyntheticEvent of onclick
   */
  handleClick = e => this.setFiltered(e.currentTarget.getAttribute('element'));

  /**
   * @function getFilteredList
   * @description retrieves list of characters based on currently active filters
   * @return {Array<string>} Array of character names
   */
  getFilteredList = () => CHARACTER_LIST.filter(c => !this.state.filtered.get(getCharacterData(c,'element')));

  /**
   * renders filter bar and list
   * @return {JSX}
   */
  render() { return (
    <div className="view" id="characterListView">
      <FilterBar filtered={this.state.filtered} handleClick={this.handleClick} />
      <CharacterList characters={this.getFilteredList()} {...this.props} />
    </div>
  )}
}

/**
 * function component for filter bar
 * renders `ul` of toggleable buttons for each element
 * @param {React.Props} props 
 * @return {JSX}
 */
function FilterBar(props) { return (
  <ul id="filterBar">
    {ELEMENT_LIST.map(e => <FilterButton key={e} element={e} filtered={props.filtered.get(e)} handleClick={props.handleClick} />)}
  </ul>
)}

/**
 * function component for filter button
 * renders button for an element with onclick handler to toggle
 * @param {React.Props} props - element, onclick handler, filter active state
 * @return {JSX}
 */
function FilterButton(props) { return (
  <button className={'filterButton' + (props.filtered ? ' activeFilter' : '')} element={props.element} onClick={props.handleClick}>
    <img className="filterButtonImg" src={getAssetPath('element', props.element)} alt="" />
  </button>
)}
/** TODO
 * @todo refactor to use `c.isSelected` instead of `props.selected.get(c)`
 * function component for character list, with toggleable selection state for each character
 * renders `ul` of {@linkcode CharacterListItem} components, using character name as React `key`
 * @param {React.Props} props - list of selected characters
 * @return {JSX}
 */
function CharacterList(props) { return (
  <ul className="list" id="characterList">
    {props.characters.map(c => <CharacterListItem key={c} character={c} selected={props.selected.get(c)} handleClick={props.handleClick} />)}
  </ul>
)}

/**
 * function component for list item displayed in {@linkcode CharacterList}
 * renders `li` containing a {@linkcode CharacterCard} component
 * @param {React.Props} props - character name, selected state, onclick handler
 */
function CharacterListItem(props) { return (
  <li className={'characterListItem' + (props.selected ? ' selectedListItem' : '')} name={getCharacterData(props.character, 'name')} onClick={props.handleClick}>
    <CharacterCard character={props.character} />
  </li>
)}

export default CharacterListView;