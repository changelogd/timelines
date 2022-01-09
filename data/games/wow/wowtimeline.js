/* global vis $ */
import groups from './groups.js'
import releases from './releases.js'
import ptr from './ptr.js'
import minorPatches from './minorPatches.js'
import patches from './patches.js'

// DOM element where the Timeline will be attached
const container = document.getElementById('timeline')

function buildTimelineData () {
  const ptrToggled = $('#togglePtr').is(':checked')

  const timelineData = [
    releases.wow,
    releases.tbc,
    releases.wrath,
    releases.cata,
    releases.mists,
    releases.wod,
    releases.legion,
    releases.bfa,
    releases.sl
  ]

  // PTR Patches
  if (ptrToggled) {
    timelineData.push(...ptr)
  }

  // Minor Patches
  timelineData.push(...minorPatches)

  // Major Patches
  timelineData.push(...patches)
  // timelineData.concat(wow_major_patches)
  // timelineData.concat(legionPatches) // Legion
  // timelineData.concat(bfaPatches) // Legion

  return timelineData
}

const timelineData = buildTimelineData()

// Create a DataSet (allows two way data-binding)
const items = new vis.DataSet(timelineData)

// Configuration for the Timeline
const options = {
  min: '2004-11-20',
  max: '2022-12-30', // This will likely need to be increased in a future date.
  zoomKey: 'ctrlKey'
}

// Create a Timeline
const timeline = new vis.Timeline(container, items, groups, options)

// Update data and timeline on filter click.
$('.filters input').click(function () {
  const newTimelineData = buildTimelineData()

  timeline.setItems(newTimelineData)
})
