/* global vis */
import timelineData from './data.js'
import groups from './groups.js'

// DOM element where the Timeline will be attached
const container = document.getElementById('timeline')

// Create a DataSet (allows two way data-binding)
const items = new vis.DataSet(timelineData)

// Configuration for the Timeline
const options = {
  min: '2012-04-01',
  max: '2022-01-01',
  zoomKey: 'ctrlKey'
}

// Create a Timeline
var timeline = new vis.Timeline(container, items, groups, options)
