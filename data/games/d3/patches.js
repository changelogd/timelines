var patch_style = 'color: #ececec;';
var patches = [];

var patchData = {
    107: {
        patch: '1.0.7',
        date: '2013-02-13',
    },
    108: {
        patch: '1.0.8',
        date: '2013-05-07',
    },
    201: {
        patch: '2.0.1',
        date: '2014-02-26',
    },
    202: {
        patch: '2.0.2',
        date: '2014-03-05',
    },
    203: {
        patch: '2.0.3',
        date: '2014-03-11',
    },
    204: {
        patch: '2.0.4',
        date: '2014-04-08',
    },
    205: {
        patch: '2.0.5',
        date: '2014-05-13',
    },
    206: {
        patch: '2.0.6',
        date: '2014-06-11',
    },
    210: {
        patch: '2.1.0',
        date: '2014-08-26',
    },
    211: {
        patch: '2.1.1',
        date: '2014-09-23',
    },
    212: {
        patch: '2.1.2',
        date: '2015-01-14',
    },
    220: {
        patch: '2.2.0',
        date: '2015-04-08',
    },
    221: {
        patch: '2.2.1',
        date: '2015-05-19',
    },
    230: {
        patch: '2.3.0',
        date: '2015-08-25',
    },
    240: {
        // https://eu.battle.net/d3/en/blog/19998542/patch-240-now-live-12-01-2016
        patch: '2.4.0',
        date: '2016-01-12',
    },
    241: {
        // https://eu.battle.net/d3/en/blog/20099649/patch-241-now-live-4-26-2016
        patch: '2.4.1',
        date: '2016-04-26',
    },
    242: {
        // https://eu.battle.net/d3/en/blog/20210379/patch-242-now-live-8-2-2016
        patch: '2.4.2',
        date: '2016-08-03',
    },
    243: {
        // https://eu.battle.net/d3/en/blog/20426802/patch-243-now-live-1-4-2017
        patch: '2.4.3',
        date: '2017-01-04',
    },
    250: {
        // https://eu.battle.net/d3/en/blog/20635663/patch-250-now-live-21-03-2017
        patch: '2.5.0',
        date: '2017-03-21'
    },
    260: {
        // https://eu.battle.net/d3/en-gb/blog/20845163/patch-260-now-live-27-06-2017
        patch: '2.6.0',
        date: '2017-06-27'
    },
    267: {
        patch: '2.6.7',
        date: '2019-11-12',
    },
    271: {
        patch: '2.7.1',
        date: '2021-06-20'
    },
    '271a': {
        patch: '2.7.1a',
        date: '2021-08-31'
    }
}

for (key in patchData) {
    var data = patchData[key];
    var p = {
        content: 'Patch ' + data.patch,
        start: data.date,
        group: 'd3_patches',
        type: 'point',
        style: patch_style
    }

    patches.push(p);
}
