import React from 'react';
import './KApp.css';
import { CHARACTER_LIST, getCharacterData } from './utils';
import CharacterListView from './CharacterListView.js';
import MaterialListView from './MaterialListView.js';
import CharacterEditView from './CharacterEditView.jsx';

const DEBUG=true
const DEBUG_LOG=_=>{if(DEBUG)console.log(..._)}

class KApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 1,
      selected: new Map(CHARACTER_LIST.map(x => [x, false])),
      inputValues: new Map(),
    };
  }
  
  setSelected = c => this.setState((state, _) => {
    let ivs = new Map(state.inputValues)
    if(state.selected.get(c)) {
      ivs.delete(c)
    } else {
      ivs.set(c, new Map([...getCharacterData(c, 'talents').values()].slice(0,3).map(t=>[t,"1"])))
    }
    // DEBUG_LOG(ivs)
    return {selected: new Map(state.selected).set(c, !state.selected.get(c)), inputValues: ivs}
  });//({selected: new Map(state.selected).set(c, !state.selected.get(c))}));
  handleClick = e => this.setSelected(e.currentTarget.getAttribute('name'));
  toggleEdit = _ => this.setState((state, _)=>{
    if(!this.state.view) this.applyEdits()
    return {view: !this.state.view}})
  inputUpdate=_=>{
    const c = _.currentTarget.parentNode.parentNode.getAttribute('character')
    this.setState((state, p)=>({inputValues: new Map(state.inputValues).set(c, new Map(state.inputValues.get(c)).set(_.target.id, _.nativeEvent.data))}))
    // DEBUG_LOG(c,_.target.id,_.nativeEvent.data)
  }
  applyEdits=_=>{
    DEBUG_LOG(this.state.inputValues)
  }

  getSelectedList = () => [...this.state.selected.entries()].filter(x=>x[1]).map(x=>x[0]);

  render() { return (
    <div className="app">
      {/* <EditModeCharacterListItem character='Amber' /> */}
      <button id="toggleView" onClick={this.toggleEdit}>{this.state.view?'list':'edit'}</button>
      { this.state.view
        ? <CharacterListView selected={this.state.selected} handleClick={this.handleClick} />
        : <CharacterEditView selected={this.state.selected} handleChange={this.inputUpdate} inputValues={this.state.inputValues} /> }
      <MaterialListView input={this.state.inputValues} />
    </div>
  )}
}

export default KApp;