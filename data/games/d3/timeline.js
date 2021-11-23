// DOM element where the Timeline will be attached
var container = document.getElementById('timeline');

// Create a DataSet (allows two way data-binding)
var items = new vis.DataSet(timelineData);

// Configuration for the Timeline
var options = {
    min: '2012-04-01',
    max: '2022-01-01',
    zoomKey: 'ctrlKey',
};

// Create a Timeline
var timeline = new vis.Timeline(container, items, groups, options);

// Update data and timeline on filter click.
$('.filters input').click(function () {
    timelineData = buildTimelineData();

    timeline.setItems(timelineData);
});
