import { getAssetPath } from "./utils";

function CharacterCard(props) {
  return (
    <div className="character-card">
      <CharacterPortrait />
      {/* <ElementIcon />
      <WeaponIcon />
      <CharacterName /> */}
    </div>
  );
}

function CharacterPortrait(props) {
  return <img src={getAssetPath('character', 'Test')} alt="" />;
}

function CharacterName(props) {
  return <span>{props.name}</span>;
}

function ElementIcon(props) {
  return <img src={getAssetPath('element', props)} alt="" />;
}

function WeaponIcon(props) {
  return <img src={getAssetPath('weapon', props)} alt="" />;
}

export default CharacterCard;