import React from 'react';
import './temp.css';

function CharacterCard(props) {
  return ( <div className="character-card">
    <IconElement element={getCharacterData(props.character, 'element')} />
    <IconWeapon weapon={getCharacterData(props.character, 'weapon')} />
    <CharacterCardPortrait character={props.character} />
    <CharacterCardName character={props.character} />
    <IconRarity rarity={getCharacterData(props.character, 'rarity')} />
  </div> );
}

function IconElement(props) {
  return <img className="icon icon-small-round icon-top-left" src={getAssetPath('element', props.element)} />;
}
function IconWeapon(props) {
  return <img className="icon icon-small-round icon-top-right" src={getAssetPath('weapon', props.weapon)} />;
}

function CharacterCardPortrait(props) {
  return <img className="portrait" src={getAssetPath('character', props.character)} />
}
function CharacterCardName(props) {
  return <span className="character-card-name">{props.character}</span>
}

function IconRarity(props) {
  return ( <div className="rarity">
    <img className="rarity-stars" src={getAssetPath('other', 'rarityStar')} />
  </div> );
}
// function IconRarity(props) {
//   return ( <div className="rarity">
//     {new Array(props.rarity).map(() => <IconRarityStar />)}
//   </div> );
// }
// function IconRarityStar(props) {
//   return <img className="icon icon-small-round icon-stackable" src={getAssetPath('other', 'rarityStar')} />
// }

function CharacterListItem(props) {
  return ( <div className="character-list-item">
    <CharacterCard character={props.character} />
    <CharacterMaterials character={props.character} />
    <CharacterTalents character={props.character} />
  </div> );
}

function CharacterMaterials(props) {
  return ( <ul className="character-data-list">
    {getCharacterData(props.character, 'materials').map(material => <CharacterMaterial material={material} />)}
  </ul> );
}
function CharacterMaterial(props) {
  return <li className="character-data-item"><img className="icon" src={getAssetPath('material', props.material)} /><span className="icon-label">{props.material}</span></li>;
}

function CharacterTalents(props) {
  return ( <>
    <CharacterCombatTalents {...props}/>
    <CharacterPassiveTalents {...props}/>
  </> );
}
function CharacterCombatTalents(props) {
  return ( <ul className="character-data-list">
    {getCharacterData(props.character, 'combatTalents').map(talent => <CharacterCombatTalent talent={talent} />)}
  </ul> );
}
function CharacterCombatTalent(props) {
  return <li className="character-data-item"><img className="icon" src={getAssetPath('talent', props.talent)} /><span className="icon-label">{props.talent}</span></li>;
}
function CharacterPassiveTalents(props) {
  return ( <ul className="character-data-list">
    {getCharacterData(props.character, 'passiveTalents').map(talent => <CharacterPassiveTalent talent={talent} />)}
  </ul> );
}
function CharacterPassiveTalent(props) {
  return <li className="character-data-item"><img className="icon" src={getAssetPath('talent', props.talent)} /><span className="icon-label">{props.talent}</span></li>;
}

/**
 * 
 */

 /** TODO */
function getAssetPath(type, name) {
  const mock = {
    'character': {
      'dir': 'temp_character/',
      'Test': 'temp_character.png',
    },
    'element': {
      'dir': 'temp_element/',
      'testelement': 'temp_element.png',
    },
    'weapon': {
      'dir': 'temp_weapon/',
      'testweapon': 'temp_weapon.png',
    },
    'material': {
      'dir': 'temp_material/',
      'testcommon': 'temp_material.png',
      'testbook': 'temp_material.png',
      'testlocal': 'temp_material.png',
    },
    'talent': {
      'dir': 'temp_talent/',
      'testbasicattack': 'temp_talent.png',
      'testelementalskill': 'temp_talent.png',
      'testelementalburst': 'temp_talent.png',
      'testpassive1': 'temp_talent.png',
      'testpassive2': 'temp_talent.png',
      'testpassive3': 'temp_talent.png',
      'testpassive4': 'temp_talent.png',
    },
    'other': {
      'dir': 'temp_other/',
      'rarityStar': '4star.png',
    },
  };
  return './temp_assets/' + mock[type]['dir'] + mock[type][name];
  //return ASSET_PATHS[type][name]
}

/** TODO */
function getCharacterData(character, data) {
  // const mock = {name:"Test", element: "testelement", materials: {'common': 'testcommon', 'book': 'testbook', 'local': 'testlocal'}, talents: {'combat': {'basic': 'testbasicattack', 'skill': 'testelementalskill', 'burst': 'testelementalburst'}, 'passive': {'passive1': 'testpassive1', 'passive2': 'testpassive2', 'passive3': 'testpassive3', 'passive4': 'testpassive4'}}};
  const mock = {name:"Test", element: "testelement", weapon: "testweapon", rarity: "4", materials: ['testcommon', 'testbook', 'testlocal'], talents: {'combat': ['testbasicattack', 'testelementalskill', 'testelementalburst'], 'passive': ['testpassive1', 'testpassive2', 'testpassive3', 'testpassive4']}};
  switch (data) {
    case 'combatTalents':
      return mock['talents']['combat'];
    case 'passiveTalents':
      return mock['talents']['passive'];
  
    default:
      break;
  }
  return mock[data];
  //return CHARACTER_DATA[character][data]
}

export default CharacterListItem;