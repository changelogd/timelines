/*
    World of Warcraft: Battle for Azeroth (BfA)
    Patches
*/
const pointClass = 'point-shadowlands'
const slPatches = []

const slPatchData = {
  901: {
    patch: '9.0.1',
    date: '2020-10-13',
    group: 'patches_live_prepatch',
  },
  902: {
    patch: '9.0.2',
    date: '2020-11-17',
  },
  905: {
    patch: '9.0.5',
    date: '2021-03-09',
  },
  910: {
    patch: '9.1.0',
    date: '2021-06-29',
  },
  915: {
    patch: '9.1.5',
    date: '2021-11-02',
  },
  920: {
    patch: '9.2.0',
    date: '2022-02-22',
  },
  925: {
    patch: '9.2.5',
    date: '2022-05-31',
  },
  ["925a"]: {
    patch: '9.2.5a',
    date: '2022-08-02',
  },
  927: {
    patch: '9.2.7',
    date: '2022-08-16',
  }
  // 837: {
  //     patch: '8.3.7',
  //     date: '2020-07-22',
  // },
}

// Build the patch data into an array.
for (const key in slPatchData) {
  var data = slPatchData[key];
  var p = {
    content: data.patch,
    start: data.date,
    group: data.group ?? 'patches_live',
    type: 'point',
    style: 'color: #ececec;',
    className: pointClass
  }

  slPatches.push(p)
}

export default slPatches
