// DOM element where the Timeline will be attached
var container = document.getElementById('timeline');

function buildTimelineData() {
    var ptrToggled = $('#togglePtr').is(':checked');

    var timelineData = [
        releases.wow,
        releases.tbc,
        releases.wrath,
        releases.cata,
        releases.mists,
        releases.wod,
        releases.legion,
    ];

    // PTR Patches
    if (true === ptrToggled) {
        timelineData = timelineData.concat(legion_ptr_patches); // Legion
    }

    // Minor Patches
    timelineData = timelineData.concat(wow_minor_patches);

    // Major Patches
    timelineData = timelineData.concat(wow_major_patches);
    timelineData = timelineData.concat(legionPatches); // Legion

    return timelineData;
}

timelineData = buildTimelineData();

// Create a DataSet (allows two way data-binding)
var items = new vis.DataSet(timelineData);

// Configuration for the Timeline
var options = {
    min: '2004-11-20',
    max: '2020-01-01', // This will likely need to be increased in a future date.
    zoomKey: 'ctrlKey',
};

// Create a Timeline
var timeline = new vis.Timeline(container, items, groups, options);

// Update data and timeline on filter click.
$('.filters input').click(function () {
    timelineData = buildTimelineData();

    timeline.setItems(timelineData);
});