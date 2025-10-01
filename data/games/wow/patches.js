import wowMajorPatches from './wow/patches.js'
import wodPatches from './wod/patches.js'
import legionMajorPatches from './legion/patches.js'
import bfaMajorPatches from './bfa/patches.js'
import shadowlandsPatches from './shadowlands/patches.js'
import dragonflightPatches from './df/patches.js'
import twwPatches from './tww/patches.js'

const patches = [
  ...wowMajorPatches,
  ...wodPatches,
  ...legionMajorPatches,
  ...bfaMajorPatches,
  ...shadowlandsPatches,
  ...dragonflightPatches,
  ...twwPatches
]

export default patches
