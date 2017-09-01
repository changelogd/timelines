/*
    World of Warcraft: Legion
    Patches
*/
var pointStyle = 'color: #ececec;';
var legionPatchClass = 'legion patch';


// 7.1.0
var patch7_1 = {
    id: 'legion71',
    content: '7.1',
    type: 'point',
    start: '2016-10-25',
    style: pointStyle,
    group: 'legion_patches',
    classification: 'major',
    className: legionPatchClass,
}

// 7.1.5
var patch7_1_5 = {
    id: 'legion715',
    content: '7.1.5',
    type: 'point',
    start: '2017-01-10',
    style: pointStyle,
    group: 'legion_patches',
    classification: 'minor',
    className: legionPatchClass,
}

// 7.2.0
var patch7_2_0 = {
    id: 'legion720',
    content: '7.2.0',
    type: 'point',
    start: '2017-03-28',
    style: pointStyle,
    group: 'legion_patches',
    classification: 'major',
    className: legionPatchClass,
}

// 7.2.5
var patch7_2_5 = {
    id: 'legion725',
    content: '7.2.5',
    type: 'point',
    start: '2017-06-13',
    style: pointStyle,
    group: 'legion_patches',
    classification: 'major',
    className: legionPatchClass,
}

// Define patch array for inclusion in timeline.
var legion_patches = [
    patch7_1,
    patch7_1_5,
    patch7_2_0,
    patch7_2_5,
];
