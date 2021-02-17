import {getAssetPath} from './utils.js';

function CharacterCard(props) {
  return ( <div className="character-card">
    <img className="character-card-portrait" src={getAssetPath('character', props.character)} alt="" />
    <img className="character-card-element" src={getAssetPath('element', props.element)} alt="" />
    <img className="character-card-weapon" src={getAssetPath('weapon', props.weapon)} alt="" />
    <img className="character-card-rarity" src={getAssetPath('rarity', props.rarity)} alt="" />
    <span className="character-card-name">{props.character}</span>
  </div> );
}

export default CharacterCard;