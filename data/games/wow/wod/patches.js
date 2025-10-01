/*
    World of Warcraft: Warlords of Draenor
    Patches
*/
const wodPoint = 'point-wod'
const wodPatches = []

const wodPatchData = {
  602: {
    patch: '6.0.2',
    date: '2014-08-21',
    group: 'patches_live_prepatch',
  },

  603: {
    patch: '6.0.3',
    date: '2014-10-28'
  },

  610: {
    patch: '6.1.0',
    date: '2015-02-24'
    // Heirlooms tab
    // Twitter
    // Blood Elf Models
  },

  612: {
    patch: '6.1.2',
    date: '2015-03-23'
  },

  620: {
    patch: '6.2.0',
    date: '2015-06-23'
  },

  622: {
    patch: '6.2.2',
    date: '2015-09-01'
  },

  623: {
    patch: '6.2.3',
    date: '2015-11-17'
  },

  624: {
    patch: '6.2.4',
    date: '2016-03-22'
  }
}

// Build the patch data into an array.
for (const key in wodPatchData) {
  const data = wodPatchData[key]
  const p = {
    content: data.patch,
    start: data.date,
    group: data.group ?? 'patches_live_alt',
    type: 'point',
    style: 'color: var(--wod-fg);',
    className: wodPoint
  }

  wodPatches.push(p)
}

export default wodPatches
