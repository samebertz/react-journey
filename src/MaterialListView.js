import React from 'react';
import { getAllMaterialsForCharacters, getAssetPath } from './utils.js';

function MaterialListView(props) { return (
  <div className="view" id="materialListView">
    <MaterialList materials={getAllMaterialsForCharacters(props.input)} />
  </div>
)}

function MaterialList(props) { return (
  <ul className="list" id="materialList">
    {props.materials.map(m => <MaterialListItem key={m} material={m} />)}
  </ul>
)}

function MaterialListItem(props) { return (
  <li className="materialListItem">
    <img src={getAssetPath('material', props.material)} alt={props.material} />
  </li>
)}
// const MaterialListItem = (props) => (
//   <li className="materialListItem">
//     <img src={getAssetPath('material', props.material)} alt={props.material} />
//   </li>
// );

export default MaterialListView;