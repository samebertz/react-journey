import React from 'react';
import { CHARACTER_LIST, getCharacterData, getAssetPath, mock_ELEMENTS } from './utils.js';

function MaterialListView(props) {
  console.log('input : '+props.input)
  console.log('entrs : '+[...props.input.entries()])
  console.log('filtr : '+[...props.input.entries()].filter(x=>x[1]))
  console.log('mappd : '+[...props.input.entries()].filter(x=>x[1]).map(x=>x[0]))
  return (
    <div className="view">
      <MaterialList materials={materialsFromCharacters([...props.input.entries()].filter(x=>x[1]).map(x=>x[0]))} />
    </div>
  );
}

function MaterialList(props) {
  return (
    <div className="materialList">
      {props.materials.map(m => <MaterialListItem key={m} material={m} />)}
    </div>
  );
}

/**
 * TODO
 * util
 */
function materialsFromCharacters(characters) {
  console.log(characters)
  let mats = characters.flatMap(c => [...getCharacterData(c, 'materials').values()]);
  console.log(mats)
  console.log(new Set(mats))
  return [...(new Set(mats)).values()];
}
// const materialsFromCharacters = characters => characters.flatMap(c => [getCharacterData(c, 'local'), getCharacterData(c, 'common')]);

function MaterialListItem(props) {
  return <img className="materialListItem" src={getAssetPath('material', props.material)} alt={props.material} />;
}

export default MaterialListView;