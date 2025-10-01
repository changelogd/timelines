/*
    World of Warcraft: The War Within
    Patches
*/
const twwPoint = 'point-tww'
const twwPatches = []

const twwPatchData = {
  1100: {
    patch: '11.0.0',
    date: '2024-07-23',
    group: 'patches_live_prepatch',
    // Warbands
    // Skyriding extended to all flying mounts
    // Questline: Visions of Azeroth
    // Pre-expansion event: Radiant Echoes
  },
  1102: {
    patch: '11.0.2',
    date: '2024-08-13'
  },
  1105: {
    patch: '11.0.5',
    date: '2024-10-22',
    // 20th Anniversary Event
    // New Dracthyr Classes: Hunter, Rogue, Priest, Mage, Warrior, and Warlock
  },
  1107: {
    patch: '11.0.7',
    date: '2024-12-17'
  },
  1110: {
    patch: '11.1.0',
    date: '2025-02-25'
  },
  1115: {
    patch: '11.1.5',
    date: '2025-04-22'
  },
  1117: {
    patch: '11.1.7',
    date: '2025-06-17'
  },
  1120: {
    patch: '11.2.0',
    date: '2025-08-05'
  },
  1125: {
    patch: '11.2.5',
    date: '2025-10-07'
  }
}

// Build the patch data into an array.
for (const key in twwPatchData) {
  const data = twwPatchData[key]
  const p = {
    content: data.patch,
    start: data.date,
    group: data.group ?? 'patches_live',
    type: 'point',
    style: 'color: var(--tww-fg);',
    className: twwPoint
  }

  twwPatches.push(p)
}

export default twwPatches
