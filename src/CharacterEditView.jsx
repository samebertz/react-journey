import CharacterCard from './CharacterCard.js';
import { getCharacterData, CHARACTER_LIST } from './utils';
import List from './List.jsx';

/** TODO
 * function component for list of characters in edit mode, with inputs for calculator
 * renders wrapped {@linkcode List} of {@linkcode EditModeCharacterListItem} curried with
 * default values and React event handlers for controlled component inputs
 * @param {React.Props} props - 
 * @return {JSX}
 * 
 * @todo cleanup
 */
function CharacterEditView(props) {
  const listComponent = curryProps({
    component:EditModeCharacterListItem, 
    handleChange:props.handleChange, 
    inputValues:props.inputValues});
  return (
    <div className='view' id='characterEditView' style={{'width':'900px'}}>
      <List component={listComponent} items={CHARACTER_LIST.filter(c => props.selected.get(c))}/>
    </div>
  );
};

/**
 * function HOC to curry extra props onto a component
 * @param {Props} props - component, extra props to be curried
 * @return {function(React.Props): JSX} curried component
 */
const curryProps=props=>_=><props.component {...Object.assign(props,_)}/>

/** TODO
 * function component for character list item in edit mode, with inputs for calculator
 * @param {*} param0 
 * @return {JSX}
 * 
 * @todo remove temp inline style, cleanup, pull apart
 */
function EditModeCharacterListItem({item: character, ...props}) {
  const _tempStyling_li = {'display':'flex','flexFlow':'row','float':'left','margin':'8px','width':'fit-content','height':'fit-content'},
    _tempStyling_cardWrapper = {'display':'block','float':'left'},
    _tempStyling_inputWrapper = {'display':'flex','height':'128px','flexFlow':'column wrap','justifyContent':'flex-start'};
  return (
    <li character={character} style={_tempStyling_li}>
      <div style={_tempStyling_cardWrapper}><CharacterCard character={character}/></div>
      <ul style={_tempStyling_inputWrapper}>
        {[...getCharacterData(character, 'talents').values()].slice(0,3).map(_=> // 1 input per talent
          <TalentLevelInput key={_} id={_} 
            value={props.inputValues.get(character).get(_)} 
            handleChange={props.handleChange} />
        )}
      </ul>
    </li>
  );
};

/**
 * function component for talent level input
 * @param {React.Props} props - id (using name currently), onchange event handler, value
 * @return {JSX}
 * 
 * @todo remove temp inline style, cleanup
 */
function TalentLevelInput(props) {
  const _tempStyling_input = {'display':'block','verticalAlign':'bottom','margin':'4px','outline':'none','border':'initial','width':'32px','float':'left'};
  return <input id={props.id} onChange={props.handleChange} type='number' value={props.value} min='1' max='10' style={_tempStyling_input}></input>
};

export default CharacterEditView;