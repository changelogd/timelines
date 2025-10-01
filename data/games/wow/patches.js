import wowMajorPatches from './wow/patches.js'
import legionMajorPatches from './legion/patches.js'
import bfaMajorPatches from './bfa/patches.js'
import shadowlandsMajorPatches from './shadowlands/patches.js'
import dragonflightPatches from './df/patches.js'
import twwPatches from './tww/patches.js'

const patches = [
  ...wowMajorPatches,
  ...legionMajorPatches,
  ...bfaMajorPatches,
  ...shadowlandsMajorPatches,
  ...dragonflightPatches,
  ...twwPatches
]

export default patches
