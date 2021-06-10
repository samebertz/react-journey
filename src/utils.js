const mock_ASSET_PATHS = new Map([
  ['rel_tld', './assets/'],
  ['character', new Map([
    ['dir', 'character/'],
    ['amber', 'amber.png'],
    ['barbara', 'barbara.png'],
    ['diona', 'temp_character.png'],
    ['test', 'temp_character.png'],
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
    ['firm_arrowhead', 'monster/common/firm_arrowhead.png'],
    ['sharp_arrowhead', 'monster/common/sharp_arrowhead.png'],
    ['weathered_arrowhead', 'monster/common/weathered_arrowhead.png'],
    ['glaze', 'local/glaze_lily.png'],
    ['small_lamp_grass', 'local/small_lamp_grass.png'],
    ['calla_lily', 'local/calla_lily.png'],
    ['chili', 'local/jueyun_chili.png'],
    ['freedom', 'domain/talent/teachings_of_\'freedom\'.png'],
    ['teachings_of_\'freedom\'', 'domain/talent/teachings_of_\'freedom\'.png'],
    ['guide_to_\'freedom\'', 'domain/talent/guide_to_\'freedom\'.png'],
    ['philosophies_of_\'freedom\'', 'domain/talent/philosophies_of_\'freedom\'.png'],
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

/*
const mock_ASSET_PATHS = new Map([
  ['rel_tld', './temp_assets/'],
  ['character', new Map([
    ['dir', 'temp_character/'],
    ['Test', 'temp_character.png'],
    ['Amber', 'temp_character.png'],
    ['Diona', 'temp_character.png'],
  ])],
  ['element', new Map([
    ['dir', 'temp_element/'],
    ['testelement', 'temp_element.png'],
    ['anemo', 'temp_anemo.png'],
    ['cryo', 'temp_cryo.png'],
    ['pyro', 'temp_pyro.png'],
  ])],
  ['weapon', new Map([
    ['dir', 'temp_weapon/'],
    ['testweapon', 'temp_weapon.png'],
    ['bow', 'temp_bow.png'],
    ['sword', 'temp_sword.png'],
  ])],
  ['rarity', new Map([
    ['dir', 'temp_other/'],
    ['4', '4star.png'],
  ])],
  ['material', new Map([
    ['dir', 'temp_material/'],
    ['testcore', 'temp_core.png'],
    ['pyro_core', 'temp_pyro_core.png'],
    ['cryo_core', 'temp_cryo_core.png'],
    ['testcrystal', 'temp_crystal.png'],
    ['pyro_crystal', 'temp_pyro_crystal.png'],
    ['cryo_crystal', 'temp_cryo_crystal.png'],
    ['testweekly', 'temp_weekly.png'],
    ['dvalin_sigh', 'temp_weekly.png'],
    ['childe_shard', 'temp_weekly.png'],
    ['testcommon', 'temp_common.png'],
    ['mask', 'temp_mask.png'],
    ['arrowhead', 'temp_arrowhead.png'],
    ['testlocal', 'temp_local.png'],
    ['glaze', 'temp_glaze.png'],
    ['small_lamp_grass', 'temp_small_lamp_grass.png'],
    ['calla_lily', 'temp_calla_lily.png'],
    ['chili', 'temp_chili.png'],
    ['testbook', 'temp_book.png'],
    ['freedom', 'temp_book.png'],
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
*/

/**
 * TODO
 * @param {string} type - asset type/category key
 * @param {string} name - specific asset key
 * @return {string} fully qualified path
 */
export function getAssetPath(type, name) {
  // console.log('getAssetPath('+[].slice.call(arguments)+')')
  // console.log(name.replace(' ','_').toLowerCase())
  // console.log(mock_ASSET_PATHS.get('rel_tld') + mock_ASSET_PATHS.get(type).get('dir') + mock_ASSET_PATHS.get(type).get(name.replace(/\s/g,'_').toLowerCase()))
  // return mock_ASSET_PATHS.get('rel_tld') + mock_ASSET_PATHS.get(type).get('dir') + mock_ASSET_PATHS.get(type).get(name);
  return mock_ASSET_PATHS.get('rel_tld') + mock_ASSET_PATHS.get(type).get('dir') + mock_ASSET_PATHS.get(type).get(name.replace(/\s/g,'_').toLowerCase());
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
      ['teaching', 'testbook'],
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
      ['teaching', 'freedom'],
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
      ['teaching', 'freedom'],
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
 * @param {string} character - character name
 * @param {string} data - data key
 * @return {string|number|Map} data keys `name`, `element`, `weapon` return `string`
 * data key `rarity` returns `number`
 * data keys `materials`, `talents`, `constellations` return `Map`
 */
export function getCharacterData(character, data) {
  return mock_CHARACTER_DATA.get(character).get(data);
}

/**
 * TODO
 * @param {Array<string>} characters - array of character names
 * @return {Array<string>} array of all unique material data keys associated with characters
 */
export function getAllMaterialsForCharacters(characters) {
  return [...new Set(characters.flatMap(characters => [...getCharacterData(characters, 'materials').values()])).values()]
}

export const ELEMENT_LIST = ['cryo', 'anemo', 'pyro', 'geo', 'electro', 'hydro', 'testelement'];

const TOTALEXP = [0,0,1000,2325,4025,6175,8800,11950,15675,20025,25025,30725,37175,44400,52450,61375,71200,81950,93675,106400,120175,135050,151850,169850,189100,209650,231525,254775,279425,305525,333100,362200,392850,425100,458975,494525,531775,570750,611500,654075,698500,744800,795425,848125,902900,959800,1018875,1080150,1143675,1209475,1277600,1348075,1424575,1503625,1585275,1669550,1756500,1846150,1938550,2033725,2131725,2232600,2341550,2453600,2568775,2687100,2808625,2933400,3061475,3192875,3327650,3465825,3614525,3766900,3922975,4082800,4246400,4413825,4585125,4760350,4939525,5122700,5338925,5581950,5855050,6161850,6506450,6893400,7327825,7815450,8362650]
/**
 * Calculate materials required to gain XP
 * @param {number} xp - min xp required
 * @return {Array<number>} Array of number of each tier of xp book required
 */
function calculateXPMaterials(xp) {
  let book3 = Math.floor(xp / 20000)
  let book2 = Math.floor((xp - book3 * 20000) / 5000)
  let book1 = Math.ceil((xp - book3 * 20000 - book2 * 5000) / 1000)
  return [book1, book2, book3]
}
/**
 * Calculate Mora required to use xp books
 * Mora required per XP is .2, i.e. ratio of 1 Mora to 5 XP
 * @param {Array<number>} materials - Array of number of XP material books, as from {@link calculateXPMaterials}
 * @return {number} total Mora
 */
function calculateMoraForXPMaterials(materials) {
  return .2 * (materials[2]*20000 + materials[1]*5000 + materials[0]*1000)
}
/**
 * Calculate XP materials and Mora required to gain levels
 * @param {number} from - starting level
 * @param {number} to - target level
 * @return {Map<string,*>} Map with keys `xpbooks` - pointing to the array returned by {@link calculateXPMaterials} - and `mora`
 */
export function getLevelCost(from, to) {
  const fromXP = TOTALEXP[from], toXP = TOTALEXP[to],
        materials = calculateXPMaterials(toXP - fromXP),
        mora = calculateMoraForXPMaterials(materials)
  // console.log("getlvlcost "+materials)
  return new Map([['xpbooks', materials], ['mora', mora]])
}

/*
const ASCENSIONMATS = [
  new Map([
    ["crystal rarity", 0],
    ["crystal amount", 0],
    ["core amount", 0],
    ["local amount", 0],
    ["common rarity", 0],
    ["common amount", 0],
    ["level", 0],
    ["mora", 0],
    ["ar", 0],
    ["max level", 20],
    ["max talent", 1],
    ["unlock", "None"],
  ]),
  new Map([
    ["crystal rarity", 1],
    ["crystal amount", 1],
    ["core amount", 0],
    ["local amount", 3],
    ["common rarity", 1],
    ["common amount", 3],
    ["level", 20],
    ["mora", 20000],
    ["ar", 15],
    ["max level", 40],
    ["max talent", 1],
    ["unlock", "Passive Talent 1"],
  ]),
  new Map([
    ["crystal rarity", 2],
    ["crystal amount", 3],
    ["core amount", 2],
    ["local amount", 10],
    ["common rarity", 1],
    ["common amount", 15],
    ["level", 40],
    ["mora", 40000],
    ["ar", 25],
    ["max level", 50],
    ["max talent", 2],
    ["unlock", "None"],
  ]),
  new Map([
    ["crystal rarity", 2],
    ["crystal amount", 6],
    ["core amount", 4],
    ["local amount", 20],
    ["common rarity", 2],
    ["common amount", 12],
    ["level", 50],
    ["mora", 60000],
    ["ar", 30],
    ["max level", 60],
    ["max talent", 4],
    ["unlock", "None"],
  ]),
  new Map([
    ["crystal rarity", 3],
    ["crystal amount", 3],
    ["core amount", 8],
    ["local amount", 30],
    ["common rarity", 2],
    ["common amount", 18],
    ["level", 60],
    ["mora", 80000],
    ["ar", 35],
    ["max level", 70],
    ["max talent", 6],
    ["unlock", "Passive Talent 2"],
  ]),
  new Map([
    ["crystal rarity", 3],
    ["crystal amount", 6],
    ["core amount", 12],
    ["local amount", 45],
    ["common rarity", 3],
    ["common amount", 16],
    ["level", 70],
    ["mora", 100000],
    ["ar", 40],
    ["max level", 80],
    ["max talent", 8],
    ["unlock", "None"],
  ]),
  new Map([
    ["crystal rarity", 4],
    ["crystal amount", 6],
    ["core amount", 20],
    ["local amount", 60],
    ["common rarity", 3],
    ["common amount", 24],
    ["level", 80],
    ["mora", 120000],
    ["ar", 45],
    ["max level", 90],
    ["max talent", 10],
    ["unlock", "None"],
  ]),
]
*/

/*
const TALENTMATS = [
  new Map([
    ['ascension', 0],
    ['teaching amount', 0],
    ['teaching rarity', 0],
    ['common amount', 0],
    ['common rarity', 0],
    ['mora', 0],
    ['weekly amount', 0],
  ]),
  new Map([
    ['ascension', 2],
    ['teaching amount', 3],
    ['teaching rarity', 2],
    ['common amount', 6],
    ['common rarity', 1],
    ['mora', 12500],
    ['weekly amount', 0],
  ]),
  new Map([
    ['ascension', 3],
    ['teaching amount', 2],
    ['teaching rarity', 3],
    ['common amount', 3],
    ['common rarity', 2],
    ['mora', 17500],
    ['weekly amount', 0],
  ]),
  new Map([
    ['ascension', 3],
    ['teaching amount', 4],
    ['teaching rarity', 3],
    ['common amount', 4],
    ['common rarity', 2],
    ['mora', 25000],
    ['weekly amount', 0],
  ]),
  new Map([
    ['ascension', 4],
    ['teaching amount', 6],
    ['teaching rarity', 3],
    ['common amount', 6],
    ['common rarity', 2],
    ['mora', 30000],
    ['weekly amount', 0],
  ]),
  new Map([
    ['ascension', 4],
    ['teaching amount', 9],
    ['teaching rarity', 3],
    ['common amount', 9],
    ['common rarity', 2],
    ['mora', 37500],
    ['weekly amount', 0],
  ]),
  new Map([
    ['ascension', 5],
    ['teaching amount', 4],
    ['teaching rarity', 4],
    ['common amount', 4],
    ['common rarity', 3],
    ['mora', 120000],
    ['weekly amount', 1],
  ]),
  new Map([
    ['ascension', 5],
    ['teaching amount', 6],
    ['teaching rarity', 4],
    ['common amount', 6],
    ['common rarity', 3],
    ['mora', 260000],
    ['weekly amount', 1],
  ]),
  new Map([
    ['ascension', 6],
    ['teaching amount', 12],
    ['teaching rarity', 4],
    ['common amount', 9],
    ['common rarity', 3],
    ['mora', 450000],
    ['weekly amount', 2],
  ]),
  new Map([
    ['ascension', 6],
    ['teaching amount', 16],
    ['teaching rarity', 4],
    ['common amount', 12],
    ['common rarity', 3],
    ['mora', 700000],
    ['weekly amount', 2],
  ]),
]
*/

/**
 * Transforms spreadsheet-style single header data into fully keyed Maps
 * @param {Array<Array>} param0 - 2d Array representation of a table,
 * where the first element is the header
 * @return {Array<Map>} Array of Maps, where the column headers are the keys.
 */
function aMapFrom2dArrayWithHeader([h, ...arr]) {
  return arr.map(r=>new Map(r.map((v,i)=>[h[i],v])));
}

const _TALENTMATS = [
  ['ascension','teaching amount','teaching rarity','common amount','common rarity','mora','weekly amount',],
  [0,0,0,0,0,0,0,],
  [2,3,2,6,1,12500,0,],
  [3,2,3,3,2,17500,0,],
  [3,4,3,4,2,25000,0,],
  [4,6,3,6,2,30000,0,],
  [4,9,3,9,2,37500,0,],
  [5,4,4,4,3,120000,1,],
  [5,6,4,6,3,260000,1,],
  [6,12,4,9,3,450000,2,],
  [6,16,4,12,3,700000,2,],
]

const _ASCENSIONMATS = [
  ['crystal rarity','crystal amount','core amount','local amount','common rarity','common amount','level','mora','ar','max level','max talent','unlock',],
  [0,0,0,0,0,0,0,0,0,20,1,"None",],
  [1,1,0,3,1,3,20,20000,15,40,1,"Passive Talent 1",],
  [2,3,2,10,1,15,40,40000,25,50,2,"None",],
  [2,6,4,20,2,12,50,60000,30,60,4,"None",],
  [3,3,8,30,2,18,60,80000,35,70,6,"Passive Talent 2",],
  [3,6,12,45,3,16,70,100000,40,80,8,"None",],
  [4,6,20,60,3,24,80,120000,45,90,10,"None",],
]

export const ASCENSIONMATS = aMapFrom2dArrayWithHeader(_ASCENSIONMATS),
             TALENTMATS = aMapFrom2dArrayWithHeader(_TALENTMATS);

/**
 * Looks up and computes all materials required for a character to ascend
 * @param {string} name
 * @param {number} from - current ascension
 * @param {number} to - target ascension
 * @return {Map} Variably nested Map of ascension material names to amount required
 */
function getAscensionCost(name, from, to) {
  let materials = new Map([
    ['element', new Map([
      ['crystal', [0,0,0,0]],
      ['core', 0],
    ])],
    ['local', 0],
    ['common', [0,0,0]],
    ['mora', 0],
  ])
  for(let i=from+1; i<=to; i++) {
    materials.get('element').get('crystal')[ASCENSIONMATS[i].get('crystal rarity')-1] += ASCENSIONMATS[i].get('crystal amount')
    materials.get('element').set('core',  materials.get('element').get('core') + ASCENSIONMATS[i].get('core amount'))
    materials.               set('local', materials.get('local') + ASCENSIONMATS[i].get('local amount'))
    materials.get('common')[ASCENSIONMATS[i].get('common rarity')-1]                  += ASCENSIONMATS[i].get('common amount')
    materials.               set('mora',  materials.get('mora') + ASCENSIONMATS[i].get('mora'))
  }
  return materials
}

/**
 * Calculates talent level up costs
 * @param {string} name - character name
 * @param {number} from - current talent level
 * @param {number} to - target talent level
 * @return {Map} Map of talent material names to amount required
 */
function getTalentCost(name, from, to) {
  // console.log("getTalentCost("+[].slice.call(arguments)+")")
  // console.log(arguments)
  let materials = new Map([
    ['teaching', [0,0,0]],
    ['common', [0,0,0]],
    ['weekly', 0],
    ['mora', 0],
  ])
  for(let i=from; i<to; i++) {
    materials.get('teaching')[TALENTMATS[i].get('teaching rarity')-2] += TALENTMATS[i].get('teaching amount')
    materials.get('common')[TALENTMATS[i].get('common rarity')-1] += TALENTMATS[i].get('common amount')
    materials.set('mora', materials.get('mora') + TALENTMATS[i].get('mora'))
    materials.set('weekly', materials.get('weekly') + TALENTMATS[i].get('weekly amount'))
  }
  // console.log(materials)
  return materials
}

/**
 * Calculates character advancement costs
 * uses {@linkcode getAscensionCost}, {@linkcode getTalentCost}, {@linkcode getLevelCost}
 * @param {string} name - character name
 * @param {number} lFrom - current level
 * @param {number} lTo - target level
 * @param {number} aFrom - current ascension
 * @param {number} aTo - target ascension
 * @param {number} t1From - basic attack current level
 * @param {number} t1To - basic attack target level
 * @param {number} t2From - elemental skill current level
 * @param {number} t2To - elemental skill target level
 * @param {number} t3From - elemental burst current level
 * @param {number} t3To - elemental burst target level
 * @return {Map} - Map of material names to amount required
 */
export function getCost(name, lFrom, lTo, aFrom, aTo, t1From, t1To, t2From, t2To, t3From, t3To) {
  // console.log("getCost("+[].slice.call(arguments)+")")
  let costs = [
    getAscensionCost(name, aFrom, aTo),
    getTalentCost(name, t1From, t1To),
    getTalentCost(name, t2From, t2To),
    getTalentCost(name, t3From, t3To)
  ], levelCost = getLevelCost(lFrom, lTo)
  costs.unshift(levelCost)
  let tCosts = costs.slice(2,5)
  // console.log(costs, tCosts)
  let materials = new Map([
    ['xpbooks', costs[0].get('xpbooks')],
    ['element', costs[1].get('element')],
    ['local', costs[1].get('local')],
    ['common', costs.slice(1,5).reduce((a, c) => a.map((_c, i) => _c + c.get('common')[i]), [0,0,0])],
    ['teaching', tCosts.reduce((a, c) => a.map((_c, i) => _c + c.get('teaching')[i]), [0,0,0])],
    ['weekly', tCosts.reduce((a, c) => a + c.get('weekly'), 0)],
    ['mora', costs.reduce((a, c) => a + c.get('mora'), 0)],
  ])
  // console.log(materials.teaching)

  return materials
}



export function getTalentMaterialsForCharacters(input) {
  // let mats = new Map([...new Set([...input.keys()].flatMap(character => 
  //   [...getCharacterData(character, 'materials').values()]
  // )).values()].map(_=>[_,0]))//.set()
  let mats=new Map()
  // console.log(mats)
  // console.log(input)
  for(let i of input) {
    // console.log(...[...i[1].values()].flatMap(_=>[1,parseInt(_)]))
    // console.log(getCost(i[0],1,1,1,1,...[...i[1].values()].flatMap(_=>[1,parseInt(_)])))
    // console.log([...i[1].values()].map(_=>getTalentCost(i[0],1,parseInt(_))))
    // console.log([...i[1].values()].map(_=>getTalentCost(i[0],1,parseInt(_)))[0])
    // console.log(getCharacterData(i[0], 'materials'))
    let tcosts = [...i[1].values()].map(_=>getTalentCost(i[0],1,parseInt(_)))
    let tmats = getCharacterData(i[0], 'materials')
    // console.log(tmats)
    /** core → "pyro_core"
     *  crystal → "pyro_crystal"
     *  weekly → "dvalin_sigh"
     *  common → "arrowhead"
     *  local → "small_lamp_grass"
     *  teaching → "freedom"
     */
    // console.log(tcosts)
    for(let tcost of tcosts) {
      // console.log(t)
      /** teaching → Array(3) [ 0, 0, 0 ]
       *  common → Array(3) [ 0, 0, 0 ]
       *  weekly → 0
       *  mora → 0
       */
      tcost.get('teaching').filter(x=>x>0).forEach((v,i) => {
        let n = nameLookupForTeachings(tmats.get('teaching'),i)
        mats.set(n, (mats.get(n) || 0) + v)
      })
      tcost.get('common').filter(x=>x>0).forEach((v,i) => {
        let n = nameLookupForCommons(tmats.get('common'),i)
        mats.set(n, (mats.get(n) || 0) + v)
      })
    }
  }
  console.log(mats)
  return mats
}

function nameLookupForTeachings(mat, rarity) {
  return [
    "Teachings of \'_\'",
    "Guide to \'_\'",
    "Philosophies of \'_\'"
  ][rarity].replace("_", mat)
}

const commons = new Map([
  ['slime condensate', new Map([
    ['type', 'slime'],
    ['tiers', [
      '_ condensate',
      '_ secretions',
      '_ concentrate'
    ]]
  ])],
  ['damaged mask', new Map([
    ['type', 'mask'],
    ['tiers', [
      'damaged _',
      'stained _',
      'ominous _'
    ]]
  ])],
  ['firm arrowhead', new Map([
    ['type', 'arrowhead'],
    ['tiers', [
      'firm _',
      'sharp _',
      'weathered _'
    ]]
  ])],
  ['divining scroll', new Map([
    ['type', 'scroll'],
    ['tiers', [
      'divining _',
      'sealed _',
      'forbidden curse _'
    ]]
  ])],
  ['recruit\'s insignia', new Map([
    ['type', 'insignia+F'],
    ['tiers', [
      'recruit\'s _',
      'sergeant\'s _',
      'lieutenant\'s _'
    ]]
  ])],
  ['treasure hoarder insignia', new Map([
    ['type', 'insignia+TH'],
    ['tiers', [
      'treasure hoarder _',
      'silver raven _',
      'golden raven _'
    ]]
  ])],
  ['whopperflower nectar', new Map([
    ['type', 'nectar'],
    ['tiers', [
      'whopperflower _',
      'shimmering _',
      'energy _'
    ]]
  ])],
])
function nameLookupForCommons(mat, rarity) {
  // return commons.get(mat.toLowerCase()).get('tiers')[rarity]
  //   .replace("_", commons.get(mat.toLowerCase()).get('type').replace(/\+.*/, ""))
  return [...commons.values()].find(e=>e.get('type')==mat).get('tiers')[rarity]
    .replace("_", mat.replace(/\+.*/, ""))
}