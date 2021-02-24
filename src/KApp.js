import React from 'react';
import './KApp.css';
import { CHARACTER_LIST } from './utils';
import CharacterListView from './CharacterListView.js';
import MaterialListView from './MaterialListView.js';

class KApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: true,
      selected: new Map(CHARACTER_LIST.map(x => [x, false])),
    };
  }
  
  setSelected = c => this.setState((state, _) => ({selected: new Map(state.selected).set(c, !state.selected.get(c))}));
  handleClick = e => this.setSelected(e.currentTarget.getAttribute('name'));

  getSelectedList = () => [...this.state.selected.entries()].filter(x=>x[1]).map(x=>x[0]);

  render() { return (
    <div className="app">
      <button id="toggleView" onClick={() => this.setState({view: !this.state.view})}>{this.state.view?'list':'mats'}</button>
      { this.state.view
        ? <CharacterListView selected={this.state.selected} handleClick={this.handleClick} />
        : <MaterialListView input={this.getSelectedList()} /> }
    </div>
  )}
}

export default KApp;