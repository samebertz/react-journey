import CharacterCard from './CharacterCard.js';
import { getCharacterData, CHARACTER_LIST } from './utils';
import List from './List.jsx';

function CharacterEditView(props) { return (<div className='view' id='characterEditView' style={{'width':'900px'}}>
  <List component={curryProps({component:EditModeCharacterListItem, handleChange:props.handleChange, inputValues:props.inputValues})} items={CHARACTER_LIST.filter(c => props.selected.get(c))}/>
  </div>)}

const curryProps=props=>_=><props.component {...Object.assign(props,_)}/>

function EditModeCharacterListItem({item: character, ...props}) { return (
  <li character={character} style={{'display':'flex','flexFlow':'row','float':'left','margin':'8px','width':'fit-content','height':'fit-content'}}>
    <div style={{'display':'block','float':'left'}}><CharacterCard character={character}/></div>
    <ul style={{'display':'flex','height':'128px','flexFlow':'column wrap','justifyContent':'flex-start'}}>{[...getCharacterData(character, 'talents').values()].slice(0,3).map(_=><TalentLevelInput value={props.inputValues.get(character).get(_)} handleChange={props.handleChange} key={_} id={_}/>)}</ul>
  </li>
)}

function TalentLevelInput(_) { return <input id={_.id} onChange={_.handleChange} type='number' value={_.value} min='1' max='10' style={{'display':'block','verticalAlign':'bottom','margin':'4px','outline':'none','border':'initial','width':'32px','float':'left'}}></input> }

export default CharacterEditView;