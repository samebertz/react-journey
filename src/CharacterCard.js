import { getAssetPath, getCharacterData } from "./utils";

function CharacterCard(props) { return (
  <div className="characterCard">
    <CharacterPortrait {...props} />
    <ElementIcon element={getCharacterData(props.character, 'element')} />
    <WeaponIcon weapon={getCharacterData(props.character, 'weapon')} />
    <CharacterName name={getCharacterData(props.character, 'name')} />
  </div>
)}

function CharacterPortrait(props) { return ( <img className="characterPortrait" src={getAssetPath('character', props.character)} alt="" /> ) }

function CharacterName(props) { return ( <span className="characterName">{props.name}</span> ) }

function ElementIcon(props) { return ( <img className="elementIcon" src={getAssetPath('element', props.element)} alt="" /> ) }

function WeaponIcon(props) { return ( <img className="weaponIcon" src={getAssetPath('weapon', props.weapon)} alt="" /> ) }

export default CharacterCard;