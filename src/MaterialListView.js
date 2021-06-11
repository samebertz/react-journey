import React from 'react';
import { getTalentMaterialsForCharacters, getAssetPath } from './utils.js';

/** TODO
 * functino component for wrapper around list of materials
 * @param {React.Props} props - list of characters and their talent level inputs
 * for {@linkcode getTalentMaterialsForCharacters}
 * @return {JSX}
 * 
 * @todo add rest of materials
 */
function MaterialListView(props) { return (
  <div className="view" id="materialListView">
    <MaterialList materials={getTalentMaterialsForCharacters(props.input)} />
  </div>
)}

/** TODO
 * function component for list of materials
 * renders `ul` of one {@linkcode MaterialListItem} per material
 * @param {React.Props} props - materials list
 * @return {JSX}
 * 
 * @todo use generic list?
 */
function MaterialList(props) { return (
  <ul className="list" id="materialList">
    {[...props.materials.entries()].map(m => <MaterialListItem key={m[0]} material={m} />)}
  </ul>
)}

/**
 * function component for material list item
 * renders image of material with a small badge showing the amount required
 * @param {React.Props} props - 2 element array containing material name and amount
 * @return {JSX}
 */
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