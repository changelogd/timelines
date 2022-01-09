const pointStyle = 'color: #ececec;'
const pointClass = 'point-wow'
const patchGroup = 'patches_live'

// 1.1.1
const patch111 = {
  // http://wow.gamepedia.com/Patch_1.1.1
  id: 'wow111',
  type: 'point',
  content: '1.1.1',
  start: '2004-11-17',
  group: patchGroup,
  style: pointStyle,
  className: pointClass,
  classification: 'minor'
}

// 1.1.2
const patch112 = {
  // http://wow.gamepedia.com/Patch_1.1.2
  id: 'wow112',
  type: 'point',
  content: '1.1.2',
  start: '2004-12-06',
  group: patchGroup,
  style: pointStyle,
  className: pointClass,
  classification: 'minor'
}

// 1.2.1
const patch121 = {
  // http://wow.gamepedia.com/Patch_1.2.1
  id: 'wow121',
  type: 'point',
  content: '1.2.1',
  start: '2004-12-21',
  group: patchGroup,
  style: pointStyle,
  className: pointClass,
  classification: 'minor'
}

const wowMinorPatches = [
  patch111,
  patch112,
  patch121
]

export default wowMinorPatches
