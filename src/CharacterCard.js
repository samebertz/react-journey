import { getAssetPath, getCharacterData } from "./utils";

/**
 * function component for card style display of character information
 * renders portrait, element icon, weapon icon, name badge
 * @param {React.Props} props - character name
 * @return {JSX}
 */
function CharacterCard(props) { return (
  <div className="characterCard">
    <CharacterPortrait {...props} />
    <ElementIcon element={getCharacterData(props.character, 'element')} />
    <WeaponIcon weapon={getCharacterData(props.character, 'weapon')} />
    <CharacterName name={getCharacterData(props.character, 'name')} />
  </div>
)}

/**
 * function component for character portrait
 * renders `img` with src retrieved by {@linkcode getAssetPath}
 * @param {React.Props} props - character name
 */
function CharacterPortrait(props) { return ( <img className="characterPortrait" src={getAssetPath('character', props.character)} alt="" /> ) }
/**
 * function component for character name badge
 * renders `span`
 * @param {React.Props} props - character name
 */
function CharacterName(props) { return ( <span className="characterName">{props.name}</span> ) }
/**
 * function component for small element icon
 * renders `img` with src retrieved by {@linkcode getAssetPath}
 * @param {React.Props} props - element
 */
function ElementIcon(props) { return ( <img className="elementIcon" src={getAssetPath('element', props.element)} alt="" /> ) }
/**
 * function component for small weapon type icon
 * renders `img` with src retrieved by {@linkcode getAssetPath}
 * @param {React.Props} props - weapon type
 */
function WeaponIcon(props) { return ( <img className="weaponIcon" src={getAssetPath('weapon', props.weapon)} alt="" /> ) }

export default CharacterCard;

/*
import { getAssetPath as imgSrc, getCharacterData as charData } from "./utils";

const CharacterCard = ({character: char}) => (
  <div className="charCard">
    <CharPtrt char={char} />
    <ElmtIcon elmt={charData(char, 'element')} />
    <WeapIcon weap={charData(char, 'weapon')} />
    <CharName name={charData(char, 'name')} />
  </div>
);

const CharPtrt = p => <img className="charPtrt" src={imgSrc('character', p.char)} />
const CharName = p => <span className="charName">{p.name}</span>
const ElmtIcon = p => <img className="elmtIcon" src={imgSrc('element', p.elmt)} />
const WeapIcon = p => <img className="weapIcon" src={imgSrc('weapon', p.weap)} />

export default CharacterCard;

<CharacterCard character="Amber" />
*/

/*
import { getAssetPath as imgSrc, getCharacterData as charData } from "./utils";

const CharacterCard = p => (
  <div className="charCard">
    <CharPtrt char={p.char} />
    <ElmtIcon elmt={p.elmt} />
    <WeapIcon weap={p.weap} />
    <CharName name={p.name} />
  </div>
);

const CharPtrt = p => <img className="charPtrt" src={p.src} />
const CharName = p => <span className="charName">{p.name}</span>
const ElmtIcon = p => <img className="elmtIcon" src={p.src} />
const WeapIcon = p => <img className="weapIcon" src={p.src} />

export default CharacterCard;

const cardData = c => ({'char': c, 'elmt': charData('elmt', c), 'weap': charData('weap', c), 'name': C});
<CharacterCard {...cardData(p.char)} />

<CharacterCard {...charData(p.char, ['name', 'elmt', 'weap'])} />
*/