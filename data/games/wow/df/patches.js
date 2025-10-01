/*
    World of Warcraft: Dragonflight
    Patches
*/
const dfPoint = 'point-dragonflight'
const dfPatches = []

const dfPatchData = {
  10_0_0: {
    patch: '10.0.0',
    date: '2022-10-25',
    group: 'patches_live_prepatch',
  },
  10_0_2: {
    patch: '10.0.2',
    date: '2022-11-15',
  },
  10_0_5: {
    patch: '10.0.5',
    date: '2023-01-24',
  },
  10_0_7: {
    patch: '10.0.7',
    date: '2023-03-21',
  },
  10_1_0: {
    patch: '10.1.0',
    date: '2023-05-02',
    // Season 2
    // Aberrus
  },
  10_1_5: {
    patch: '10.1.5',
    date: '2023-07-11',
  },
  10_1_7: {
    patch: '10.1.7',
    date: '2023-09-05',
  },
  10_2_0: {
    patch: '10.2.0',
    date: '2023-11-07',
  },
  10_2_5: {
    patch: '10.2.5',
    date: '2024-01-16',
    // Dynamic Flying expanded to all flyable areas.
    // Dracthyr's [Soar] turned into full dragonriding.
    // Reclaiming Gilneas
    // Dragonflight Follower Dungeons
    // Dragon Isles epilogues
    // Troll and draenei customizations
    // Additional warlock demon customizations
    // Love is in the Air holiday update
  },
  10_2_6: {
    patch: '10.2.6',
    date: '2024-03-19',
    // Plunderstorm
  },
  ["10_2_6a"]: {
    patch: '10.2.6a',
    date: '2024-04-23'
  },
  10_2_7: {
    patch: '10.2.7',
    date: '2024-05-07'
  }
}

// Build the patch data into an array.
for (const key in dfPatchData) {
  const data = dfPatchData[key]
  const p = {
    content: data.patch,
    start: data.date,
    group: data.group ?? 'patches_live_alt',
    type: 'point',
    style: 'color: var(--dragonflight-fg);',
    className: dfPoint
  }

  dfPatches.push(p)
}

export default dfPatches
