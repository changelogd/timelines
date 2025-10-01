/*
  World of Warcraft
  Patches
*/
const pointStyle = 'color: #ececec;'
const pointClass = 'point-wow'
const patchGroup = 'patches_live'
const patchGroupAlt = 'patches_live_alt'

// 1.1.0
const patch110 = {
  // http://wow.gamepedia.com/Patch_1.1.0
  id: 'wow11',
  type: 'point',
  content: '1.1',
  start: '2004-11-07',
  group: patchGroup,
  style: pointStyle,
  className: pointClass,
  classification: 'major'
}

// 1.2.0
const patch120 = {
  // http://wow.gamepedia.com/Patch_1.2.0
  id: 'wow120',
  type: 'point',
  content: '1.2',
  start: '2004-12-18',
  group: patchGroup,
  style: pointStyle,
  className: pointClass,
  classification: 'major'
}

// 1.3.0
const patch130 = {
  // http://wow.gamepedia.com/Patch_1.3.0
  id: 'wow130',
  type: 'point',
  content: '1.3',
  start: '2005-03-07',
  group: patchGroup,
  style: pointStyle,
  className: pointClass,
  classification: 'major'
}

// 1.4.0
const patch140 = {
  // http://wow.gamepedia.com/Patch_1.4.0
  id: 'wow140',
  type: 'point',
  content: '1.4',
  start: '2005-05-05',
  group: patchGroup,
  style: pointStyle,
  className: pointClass,
  classification: 'major'
}

// 1.9.0
const patch190 = {
  // http://wow.gamepedia.com/Patch_1.9.0
  id: '1.9',
  type: 'point',
  content: '1.9',
  start: '2006-01-03',
  group: patchGroup,
  style: pointStyle,
  className: pointClass,
  classification: 'major'
}

// 1.10.0
const patch1100 = {
  // http://wow.gamepedia.com/Patch_1.10.0
  id: '1.10.0',
  type: 'point',
  content: '1.10',
  start: '2006-03-28',
  group: patchGroup,
  style: pointStyle,
  className: pointClass,
  classification: 'major'
}

// 1.11.0
const patch1110 = {
  // http://wow.gamepedia.com/Patch_1.11.0
  id: '1.11.0',
  type: 'point',
  content: '1.11',
  start: '2006-06-20',
  group: patchGroup,
  style: pointStyle,
  className: pointClass,
  classification: 'major'
}

const wowMajorPatches = [
  patch110,
  patch120,
  patch130,
  patch140,
  patch190,
  patch1100,
  patch1110
]

export default wowMajorPatches
