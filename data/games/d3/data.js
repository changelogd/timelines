import releases from './releases.js'
import patches from './patches.js'
import seasons from './seasons.js'
import features from './features.js'

const timelineData = [
  ...releases,
  ...patches,
  ...seasons,
  ...features
]

export default timelineData
