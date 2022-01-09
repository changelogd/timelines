var releaseGroup = 'releases';

const releases = {
  wow: {
    id: 'wow-release',
    content: 'World of Warcraft',
    start: '2004-11-23',
    end: '2007-01-15',
    group: releaseGroup,
    style: 'background: #8e7c5f; color: #ececec;',
    classification: 'release'
  },
  tbc: {
    id: 'tbc-release',
    content: 'Burning Crusade',
    start: '2007-01-15',
    end: '2008-11-13',
    group: releaseGroup,
    style: 'background: #98bc85; color: #ececec;',
    classification: 'release'
  },
  wrath: {
    id: 'wrath-release',
    content: 'Wrath of the Lich King',
    start: '2008-11-13',
    end: '2010-12-07',
    group: releaseGroup,
    style: 'background: #89badd; color: #4a61e2;',
    classification: 'release'
  },
  cata: {
    id: 'cata-release',
    content: 'Cataclysm',
    start: '2010-12-07',
    end: '2012-09-25',
    group: releaseGroup,
    style: 'background: #eac693; color: #996b2c;',
    classification: 'release'
  },
  mists: {
    id: 'mop-release',
    content: 'Mists of Pandaria',
    start: '2012-09-25',
    end: '2014-11-13',
    group: releaseGroup,
    style: 'background: #a8e281; color: #4f8927;',
    classification: 'release'
  },
  wod: {
    id: 'wod-release',
    content: 'Warlords of Draenor',
    start: '2014-11-13',
    end: '2016-08-30',
    group: releaseGroup,
    style: 'background: #72551d; color: #ececec;',
    classification: 'release'
  },
  legion: {
    id: 'legion-release',
    content: 'Legion',
    start: '2016-08-30',
    end: '2018-08-13',
    group: releaseGroup,
    style: 'background: #256d19; color: #bdddb8;',
    classification: 'release'
  },
  bfa: {
    id: 'bfa-release',
    content: 'Battle for Azeroth',
    start: '2018-08-14',
    end: '2020-12-30', // Placeholder end date
    group: releaseGroup,
    style: 'background: #590509; color: #e08286;',
    classification: 'release'
  },
  sl: {
    id: 'sl-release',
    content: 'Shadowlands',
    start: '2020-12-31',
    end: '2022-12-31', // Placeholder dates
    group: releaseGroup,
    style: 'background: #29a9cc; color: #ececec;',
    classification: 'release'
  }
}

export default releases
