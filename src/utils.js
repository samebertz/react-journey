const mock_ASSET_PATHS = {
  'rel_tld': './temp_assets/',
  'character': {
    'dir': 'temp_character/',
    'Test': 'temp_character.png',
    'Amber': 'temp_character.png',
  },
  'element': {
    'dir': 'temp_element/',
    'testelement': 'temp_element.png',
  },
  'weapon': {
    'dir': 'temp_weapon/',
    'testweapon': 'temp_weapon.png',
  },
  'rarity': {
    'dir': 'temp_other/',
    '4': '4star.png',
  },
  'materials': {
    'dir': 'temp_material/',
    'testcore': 'temp_core.png',
    'testcrystal': 'temp_crystal.png',
    'testweekly': 'temp_weekly.png',
    'testcommon': 'temp_common.png',
    'testlocal': 'temp_local.png',
    'testbook': 'temp_book.png',
  },
  'talents': {
    'dir': 'temp_talent/',
    'testbasicattack': 'temp_talent.png',
    'testelementalskill': 'temp_talent.png',
    'testelementalburst': 'temp_talent.png',
    'testpassive1': 'temp_talent.png',
    'testpassive2': 'temp_talent.png',
    'testpassive3': 'temp_talent.png',
    'testpassive4': 'temp_talent.png',
  },
  'constellations': {
    'dir': 'temp_constellation/',
    'testconstellation1': 'temp_constellation.png',
    'testconstellation2': 'temp_constellation.png',
    'testconstellation3': 'temp_constellation.png',
    'testconstellation4': 'temp_constellation.png',
    'testconstellation5': 'temp_constellation.png',
    'testconstellation6': 'temp_constellation.png',
  },
};

export function getAssetPath(type, name) {
  return mock_ASSET_PATHS['rel_tld'] + mock_ASSET_PATHS[type]['dir'] + mock_ASSET_PATHS[type][name];
}

const mock_CHARACTER_DATA = {
  character: "Test",
  element: "testelement",
  weapon: "testweapon",
  rarity: "4",
  materials: [
    'testcore',
    'testcrystal',
    'testweekly',
    'testcommon',
    'testlocal',
    'testbook',
  ],
  talents: [
    'testbasicattack',
    'testelementalskill',
    'testelementalburst',
    'testpassive1',
    'testpassive2',
    'testpassive3',
    'testpassive4',
  ],
  constellations: [
    'testconstellation1',
    'testconstellation2',
    'testconstellation3',
    'testconstellation4',
    'testconstellation5',
    'testconstellation6',
  ],
};

export function getCharacterData(character, data) {
  return mock_CHARACTER_DATA[data];
}