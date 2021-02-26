import React from 'react';
import { getTalentMaterialsForCharacters, getAssetPath } from './utils.js';

function MaterialListView(props) { return (
  <div className="view" id="materialListView">
    <MaterialList materials={getTalentMaterialsForCharacters(props.input)} />
  </div>
)}

function MaterialList(props) { return (
  <ul className="list" id="materialList">
    {[...props.materials.entries()].map(m => <MaterialListItem key={m[0]} material={m} />)}
  </ul>
)}

function MaterialListItem(props) { return (
  <li className="materialListItem">
    <img src={getAssetPath('material', props.material[0])} alt={props.material[0]} />
    <span>{props.material[1]}</span>
  </li>
)}
// const MaterialListItem = (props) => (
//   <li className="materialListItem">
//     <img src={getAssetPath('material', props.material)} alt={props.material} />
//   </li>
// );

export default MaterialListView;