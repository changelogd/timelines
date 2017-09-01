/*
    World of Warcraft: Legion
    PTR
*/
var legionPtrClass = 'legion ptr';
var ptrPointStyle = 'border-color: #666; color: #ececec;';
var legionPtrGroup = 'legion_ptr';

// 7.2.0
var patch7_2_0_ptr = {
    // http://wowwiki.wikia.com/wiki/Patch_7.2.0
    id: 'legion720ptr',
    type: 'point',
    content: '7.2.0',
    start: '2017-01-19',
    style: ptrPointStyle,
    group: legionPtrGroup,
    classification: 'ptr',
    className: legionPtrClass,
};

// 7.2.5
var patch7_2_5_ptr = {
    // http://wowwiki.wikia.com/wiki/Patch_7.2.5
    id: 'legion725ptr',
    type: 'point',
    content: '7.2.5',
    start: '2017-04-11',
    style: ptrPointStyle,
    group: legionPtrGroup,
    classification: 'ptr',
    className: legionPtrClass,
};

// Define patch array for inclusion in timeline.
var legion_ptr_patches = [
    patch7_2_0_ptr,
    patch7_2_5_ptr,
];
