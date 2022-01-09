/*
    World of Warcraft: Legion
    Patches
*/
const legionPoint = 'point-legion'
const legionPatches = []

const legionPatchData = {
  710: {
    patch: '7.1.0',
    date: '2016-10-25'
  },
  715: {
    patch: '7.1.5',
    date: '2017-01-10'
  },
  720: {
    patch: '7.2.0',
    date: '2017-03-28'
  },
  725: {
    patch: '7.2.5',
    date: '2017-06-13'
  },
  730: {
    patch: '7.3.0',
    date: '2017-08-29'
  },
  735: {
    patch: '7.3.5',
    date: '2018-01-16'
  }
}

// Build the patch data into an array.
for (const key in legionPatchData) {
  const data = legionPatchData[key]
  const p = {
    content: data.patch,
    start: data.date,
    group: 'patches_live',
    type: 'point',
    style: 'color: var(--legion-fg);',
    className: legionPoint
  }

  legionPatches.push(p)
}

export default legionPatches
