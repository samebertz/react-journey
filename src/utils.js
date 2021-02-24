// const mock_ASSET_PATHS = new Map([
//   ['rel_tld', './temp_assets/'],
//   ['character', new Map([
//     ['dir', 'temp_character/'],
//     ['Test', 'temp_character.png'],
//     ['Amber', 'temp_character.png'],
//     ['Diona', 'temp_character.png'],
//   ])],
//   ['element', new Map([
//     ['dir', 'temp_element/'],
//     ['testelement', 'temp_element.png'],
//     ['anemo', 'temp_anemo.png'],
//     ['cryo', 'temp_cryo.png'],
//     ['pyro', 'temp_pyro.png'],
//   ])],
//   ['weapon', new Map([
//     ['dir', 'temp_weapon/'],
//     ['testweapon', 'temp_weapon.png'],
//     ['bow', 'temp_bow.png'],
//     ['sword', 'temp_sword.png'],
//   ])],
//   ['rarity', new Map([
//     ['dir', 'temp_other/'],
//     ['4', '4star.png'],
//   ])],
//   ['material', new Map([
//     ['dir', 'temp_material/'],
//     ['testcore', 'temp_core.png'],
//     ['pyro_core', 'temp_pyro_core.png'],
//     ['cryo_core', 'temp_cryo_core.png'],
//     ['testcrystal', 'temp_crystal.png'],
//     ['pyro_crystal', 'temp_pyro_crystal.png'],
//     ['cryo_crystal', 'temp_cryo_crystal.png'],
//     ['testweekly', 'temp_weekly.png'],
//     ['dvalin_sigh', 'temp_weekly.png'],
//     ['childe_shard', 'temp_weekly.png'],
//     ['testcommon', 'temp_common.png'],
//     ['mask', 'temp_mask.png'],
//     ['arrowhead', 'temp_arrowhead.png'],
//     ['testlocal', 'temp_local.png'],
//     ['glaze', 'temp_glaze.png'],
//     ['small_lamp_grass', 'temp_small_lamp_grass.png'],
//     ['calla_lily', 'temp_calla_lily.png'],
//     ['chili', 'temp_chili.png'],
//     ['testbook', 'temp_book.png'],
//     ['freedom', 'temp_book.png'],
//   ])],
//   ['talent', new Map([
//     ['dir', 'temp_talent/'],
//     ['testbasicattack', 'temp_talent.png'],
//     ['testelementalskill', 'temp_talent.png'],
//     ['testelementalburst', 'temp_talent.png'],
//     ['testpassive1', 'temp_talent.png'],
//     ['testpassive2', 'temp_talent.png'],
//     ['testpassive3', 'temp_talent.png'],
//     ['testpassive4', 'temp_talent.png'],
//   ])],
//   ['constellation', new Map([
//     ['dir', 'temp_constellation/'],
//     ['testconstellation1', 'temp_constellation.png'],
//     ['testconstellation2', 'temp_constellation.png'],
//     ['testconstellation3', 'temp_constellation.png'],
//     ['testconstellation4', 'temp_constellation.png'],
//     ['testconstellation5', 'temp_constellation.png'],
//     ['testconstellation6', 'temp_constellation.png'],
//   ])],
// ]);

const mock_ASSET_PATHS = new Map([
  ['rel_tld', './assets/'],
  ['character', new Map([
    ['dir', 'character/'],
    ['Amber', 'Amber.png'],
    ['Barbara', 'Barbara.png'],
    ['Diona', 'temp_character.png'],
    ['Test', 'temp_character.png'],
  ])],
  ['element', new Map([
    ['dir', 'element/'],
    ['anemo', 'anemo.png'],
    ['cryo', 'cryo.png'],
    ['hydro', 'hydro.png'],
    ['electro', 'electro.png'],
    ['pyro', 'pyro.png'],
    ['geo', 'geo.png'],
    ['testelement', 'temp_element.png'],
  ])],
  ['weapon', new Map([
    ['dir', 'weapon/'],
    ['bow', 'bow.png'],
    ['sword', 'sword.png'],
    ['testweapon', 'temp_weapon.png'],
  ])],
  ['rarity', new Map([
    ['dir', 'other/'],
    ['4', 'temp_4star.png'],
  ])],
  ['material', new Map([
    ['dir', 'material/'],
    ['pyro_core', 'elite/core/everflame_seed.png'],
    ['cryo_core', 'elite/core/hoarfrost_core.png'],
    ['pyro_crystal', 'elite/crystal/agnidus_agate_sliver.png'],
    ['cryo_crystal', 'elite/crystal/shivada_jade_sliver.png'],
    ['dvalin_sigh', 'weekly/dvalin\'s_sigh.png'],
    ['childe_shard', 'weekly/temp_weekly.png'],
    ['mask', 'monster/common/damaged_mask.png'],
    ['arrowhead', 'monster/common/firm_arrowhead.png'],
    ['glaze', 'local/glaze_lily.png'],
    ['small_lamp_grass', 'local/small_lamp_grass.png'],
    ['calla_lily', 'local/calla_lily.png'],
    ['chili', 'local/jueyun_chili.png'],
    ['freedom', 'domain/talent/teachings_of_\'freedom\'.png'],
  ])],
  ['talent', new Map([
    ['dir', 'temp_talent/'],
    ['testbasicattack', 'temp_talent.png'],
    ['testelementalskill', 'temp_talent.png'],
    ['testelementalburst', 'temp_talent.png'],
    ['testpassive1', 'temp_talent.png'],
    ['testpassive2', 'temp_talent.png'],
    ['testpassive3', 'temp_talent.png'],
    ['testpassive4', 'temp_talent.png'],
  ])],
  ['constellation', new Map([
    ['dir', 'temp_constellation/'],
    ['testconstellation1', 'temp_constellation.png'],
    ['testconstellation2', 'temp_constellation.png'],
    ['testconstellation3', 'temp_constellation.png'],
    ['testconstellation4', 'temp_constellation.png'],
    ['testconstellation5', 'temp_constellation.png'],
    ['testconstellation6', 'temp_constellation.png'],
  ])],
]);

/**
 * TODO
 * @param {*} type 
 * @param {*} name 
 */
export function getAssetPath(type, name) {
  return mock_ASSET_PATHS.get('rel_tld') + mock_ASSET_PATHS.get(type).get('dir') + mock_ASSET_PATHS.get(type).get(name);
}

const mock_CHARACTER_DATA = new Map([
  ['Test', new Map([
    ['name', 'Test'],
    ['element', 'testelement'],
    ['weapon', 'testweapon'],
    ['rarity', 4],
    ['materials', new Map([
      ['core', 'testcore'],
      ['crystal', 'testcrystal'],
      ['weekly', 'testweekly'],
      ['common', 'testcommon'],
      ['local', 'testlocal'],
      ['book', 'testbook'],
    ])],
    ['talents', new Map([
      ['basicattack', 'testbasicattack'],
      ['elementalskill', 'testelementalskill'],
      ['elementalburst', 'testelementalburst'],
      ['passive1', 'testpassive1'],
      ['passive2', 'testpassive2'],
      ['passive3', 'testpassive3'],
      ['passive4', 'testpassive4'],
    ])],
    ['constellations', new Map([
      ['constellation1', 'testconstellation1'],
      ['constellation2', 'testconstellation2'],
      ['constellation3', 'testconstellation3'],
      ['constellation4', 'testconstellation4'],
      ['constellation5', 'testconstellation5'],
      ['constellation6', 'testconstellation6'],
    ])],
  ])],
  ['Amber', new Map([
    ['name', 'Amber'],
    ['element', 'pyro'],
    ['weapon', 'bow'],
    ['rarity', 4],
    ['materials', new Map([
      ['core', 'pyro_core'],
      ['crystal', 'pyro_crystal'],
      ['weekly', 'dvalin_sigh'],
      ['common', 'arrowhead'],
      ['local', 'small_lamp_grass'],
      ['book', 'freedom'],
    ])],
    ['talents', new Map([
      ['basicattack', 'testbasicattack'],
      ['elementalskill', 'testelementalskill'],
      ['elementalburst', 'testelementalburst'],
      ['passive1', 'testpassive1'],
      ['passive2', 'testpassive2'],
      ['passive3', 'testpassive3'],
      ['passive4', 'testpassive4'],
    ])],
    ['constellations', new Map([
      ['constellation1', 'testconstellation1'],
      ['constellation2', 'testconstellation2'],
      ['constellation3', 'testconstellation3'],
      ['constellation4', 'testconstellation4'],
      ['constellation5', 'testconstellation5'],
      ['constellation6', 'testconstellation6'],
    ])],
  ])],
  ['Diona', new Map([
    ['name', 'Diona'],
    ['element', 'cryo'],
    ['weapon', 'bow'],
    ['rarity', 4],
    ['materials', new Map([
      ['core', 'cryo_core'],
      ['crystal', 'cryo_crystal'],
      ['weekly', 'childe_shard'],
      ['common', 'arrowhead'],
      ['local', 'calla_lily'],
      ['book', 'freedom'],
    ])],
    ['talents', new Map([
      ['basicattack', 'testbasicattack'],
      ['elementalskill', 'testelementalskill'],
      ['elementalburst', 'testelementalburst'],
      ['passive1', 'testpassive1'],
      ['passive2', 'testpassive2'],
      ['passive3', 'testpassive3'],
      ['passive4', 'testpassive4'],
    ])],
    ['constellations', new Map([
      ['constellation1', 'testconstellation1'],
      ['constellation2', 'testconstellation2'],
      ['constellation3', 'testconstellation3'],
      ['constellation4', 'testconstellation4'],
      ['constellation5', 'testconstellation5'],
      ['constellation6', 'testconstellation6'],
    ])],
  ])],
]);

export const CHARACTER_LIST = Array.from(mock_CHARACTER_DATA.keys());

/**
 * TODO
 * @param {*} character 
 * @param {*} data 
 */
export function getCharacterData(character, data) {
  return mock_CHARACTER_DATA.get(character).get(data);
}

/**
 * TODO
 * @param {*} character 
 * @param {*} data 
 */
export function getAllMaterialsForCharacters(characters) {
  return [...new Set(characters.flatMap(characters => [...getCharacterData(characters, 'materials').values()])).values()]
}

export const ELEMENT_LIST = ['cryo', 'anemo', 'pyro', 'geo', 'electro', 'hydro', 'testelement'];