var seasonPointStyle = '';
var seasonPointClass = 'season';

var seasons = [];

var seasonData = {
    1: { start: '2014-08-29', end: '2015-02-03' },
    2: { start: '2015-02-13', end: '2015-04-05' },
    3: { start: '2015-04-10', end: '2015-08-23' },
    4: { start: '2015-08-28', end: '2015-12-30' },
    5: { start: '2016-01-15', end: '2016-04-15' },
    6: { start: '2016-04-29', end: '2016-07-22' },
    7: { start: '2016-08-05', end: '2016-10-14' },
    8: { start: '2016-10-21', end: '2016-12-30' },
    9: { start: '2017-01-06', end: '2017-03-17' },
    10: { start: '2017-03-31', end: '2017-06-23' },
    11: { start: '2017-07-20', end: '2017-10-20' },
    12: { start: '2017-11-09', end: '2018-02-11' },
    13: { start: '2018-02-23', end: '2018-06-03' },
    14: { start: '2018-06-15', end: '2018-09-16' },
    23: { start: '2021-04-02', end: '2021-07-18' },
    24: { start: '2021-07-20', end: '2021-12-05' }
}

// Build the season array.
for (s = 1; s <= 999; s++) {
    if (seasonData[s]) { // check season number exists
        if (seasonData[s].start) { // check has a start date
            var season = {}
            season.start = seasonData[s].start;
            if (seasonData[s].end) {
                season.end = seasonData[s].end;
            } else {
                seasonPointStyle = 'color: #ececec;';
                season.type = 'point';
            }
            season.content = 'Season ' + s;
            season.style = seasonPointStyle;
            season.group = 'seasons';
            season.className = seasonPointClass;
            seasons.push(season);
        }
    } else {
        break;
    }
}
