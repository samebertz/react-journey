import {getAssetPath} from './utils.js';

function CharacterDetail(props) {
  console.log(Object.keys(props));
  return Object.keys(props).map(prop => (
    <ul className="character-detail-list">
      {props[prop].map(detail => (
        <li className="character-detail-item">
          <img className="character-detail-icon" src={getAssetPath(prop, detail)} alt="" />
          {prop != 'materials' ? <span className="character-detail-label">{detail}</span> : <div></div>}
        </li>
      ))}
    </ul>
  ));
}

export default CharacterDetail;