/*
    World of Warcraft: Battle for Azeroth (BfA)
    Patches
*/
const pointClass = 'point-shadowlands'
const slPatches = []

const slPatchData = {
  // 837: {
  //     patch: '8.3.7',
  //     date: '2020-07-22',
  // },
  // 715: {
  //     patch: '7.1.5',
  //     date: '2017-01-10',
  // },
  // 720: {
  //     patch: '7.2.0',
  //     date: '2017-03-28',
  // },
  // 725: {
  //     patch: '7.2.5',
  //     date: '2017-06-13',
  // },
  // 730: {
  //     patch: '7.3.0',
  //     date: '2017-08-29',
  // },
  // 735: {
  //     patch: '7.3.5',
  //     date: '2018-01-16',
  // }
}

// Build the patch data into an array.
for (const key in slPatchData) {
  var data = slPatchData[key];
  var p = {
    content: data.patch,
    start: data.date,
    group: 'patches_live',
    type: 'point',
    style: 'color: #ececec;',
    className: pointClass
  }

  slPatches.push(p)
}

export default slPatches
