// DOM element where the Timeline will be attached
var container = document.getElementById('timeline');

function buildTimelineData() {
    var ptrToggled = $('#togglePtr').is(':checked');

    var timelineData = [
        world_of_warcraft,
        the_burning_crusade,
        wrath_of_the_lich_king,
        cataclysm,
        mists_of_pandaria,
        warlords_of_draenor,
        legion,
    ];

    // PTR Patches
    if (true === ptrToggled) {
        timelineData = timelineData.concat(legion_ptr_patches); // Legion
    }

    // Minor Patches
    timelineData = timelineData.concat(wow_minor_patches);

    // Major Patches
    timelineData = timelineData.concat(wow_major_patches);
    timelineData = timelineData.concat(legion_patches); // Legion

    return timelineData;
}

timelineData = buildTimelineData();

// Create a DataSet (allows two way data-binding)
var items = new vis.DataSet(timelineData);

// Configuration for the Timeline
var options = {};

// Create a Timeline
var timeline = new vis.Timeline(container, items, groups, options);

// Update data and timeline on filter click.
$('.filters input').click(function () {
    timelineData = buildTimelineData();

    timeline.setItems(timelineData);
});