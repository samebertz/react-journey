import {getAssetPath} from './utils.js';

function CharacterDetail(props) {
  // return ( Object.keys(props).map(prop => (
  //   <ul className="character-detail-list">
  //     {props[prop].map(detail => (
  //       <li className="character-detail-item">
  //         <img className="character-detail-icon" src={getAssetPath(prop, detail)} alt="" />
  //       </li>
  //     ))}
  //   </ul>
  // )));
  return (
    <ul className="character-material-list">
      {props.materials.map(material =>
        <img className="character-material-icon" src={getAssetPath('materials', material)} alt="" />
      )}
    </ul>
  );
}

export default CharacterDetail;