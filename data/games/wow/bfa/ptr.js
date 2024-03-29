/*
    World of Warcraft: Battle for Azeroth
    PTR
*/
var bfaPtrClass = 'bfa ptr'
var ptrPointStyle = 'border-color: #666; color: #ececec;'
var bfaPtrGroup = 'patches_ptr'

const patch837Ptr = {
  // https://wow.gamepedia.com/Patch_8.3.7
  id: 'bfa837ptr',
  type: 'point',
  content: '8.3.7',
  start: '2020-06-23',
  style: ptrPointStyle,
  group: bfaPtrGroup,
  classification: 'ptr',
  className: bfaPtrClass
}

// Define patch array for inclusion in timeline.
const bfaPtrPatches = [
  patch837Ptr
]

export default bfaPtrPatches
