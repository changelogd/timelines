/*
    World of Warcraft: Battle for Azeroth (BfA)
    Patches
*/
const bfaClass = 'point-bfa'
const bfaPatches = []

const bfaPatchData = {

  801: {
    // https://wow.gamepedia.com/Patch_8.0.1
    patch: '8.0.1',
    date: '2018-07-17'
  },

  810: {
    // https://wow.gamepedia.com/Patch_8.1.0
    patch: '8.1.0',
    date: '2018-12-11'
  },

  815: {
    // https://wow.gamepedia.com/Patch_8.1.5
    patch: '8.1.5',
    date: '2019-03-12'
  },

  820: {
    // https://wow.gamepedia.com/Patch_8.2.0
    patch: '8.2.0',
    date: '2019-06-25'
  },

  825: {
    // https://wow.gamepedia.com/Patch_8.2.5
    patch: '8.2.5',
    date: '2019-09-24'
  },

  830: {
    // https://wow.gamepedia.com/Patch_8.3.0
    patch: '8.3.0',
    date: '2020-01-14'
  },

  837: {
    // https://wow.gamepedia.com/Patch_8.3.7
    patch: '8.3.7',
    date: '2020-07-22'
  }
}

// Build the patch data into an array.
for (const key in bfaPatchData) {
  const data = bfaPatchData[key]
  const p = {
    content: data.patch,
    start: data.date,
    group: 'patches_live',
    type: 'point',
    style: 'color: #ececec;',
    className: bfaClass
  }

  bfaPatches.push(p)
}

export default bfaPatches
