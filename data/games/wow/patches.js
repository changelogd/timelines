import wowMajorPatches from './wow/patches.js'
import legionMajorPatches from './legion/patches.js'
import bfaMajorPatches from './bfa/patches.js'
import shadowlandsMajorPatches from './shadowlands/patches.js'

const patches = [
  ...wowMajorPatches,
  ...legionMajorPatches,
  ...bfaMajorPatches,
  ...shadowlandsMajorPatches
]

export default patches
