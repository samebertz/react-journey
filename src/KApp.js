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
  
  handleClick = (e) => {
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
          ? <CharacterListView selected={this.state.selected} handleClick={this.handleClick} />
          : <MaterialListView input={this.state.selected} />
        }
        <p>{JSON.stringify(Array.from(this.state.selected.entries()))}</p>
      </div>
    );
  }
}

export default KApp;