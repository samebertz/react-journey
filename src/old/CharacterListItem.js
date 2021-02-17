import CharacterCard from './CharacterCard.js';
import CharacterDetail from './CharacterDetail.js';

import {getCharacterData} from './utils.js';

import './characterListItem.css'

function CharacterListItem(props) {
  const cardProps = new Map(['character', 'element', 'weapon', 'rarity'].map(p => [p, getCharacterData(props.character, p)]));
  const detailProps = new Map(['materials', 'talents', 'constellations'].map(p => [p, getCharacterData(props.character, p)]));

  return ( <div className="character-list-item">
    <CharacterCard {...Object.fromEntries(cardProps)} />
    <CharacterDetail {...Object.fromEntries(detailProps)} />
  </div> );
}

export default CharacterListItem;