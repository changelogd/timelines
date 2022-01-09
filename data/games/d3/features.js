const featureStyle = 'color: #ececec;'

const features = []

// RoS
const featureList = {
  d3: {
    date: '2012-05-15',
    features: [
      'Act I-IV',
      'Followers',
      'Hardcore Mode',
      'Real Money Auction House',
      'Artisans'
    ]
  },
  patch107: {
    date: '2013-02-13',
    features: [
      'Brawling',
      'Marquise Gems',
      'Legendary minimap icons'
    ]
  },
  patch108: {
    // https://eu.battle.net/d3/en/game/patch-notes/1-0-8
    date: '2013-05-07',
    features: [
      'Book of Cain (Mass Identification)',
      'Gold/Magic and Experience buff in co-op',
      'Craft queuing'
    ]
  },
  patch201: {
    // https://eu.battle.net/d3/en/game/patch-notes/2-0-1
    date: '2014-02-26',
    features: [
      'Pools of Reflection (Bonus XP)',
      'Nephalem Glory (Power Globes)',
      'Crafting materials combined',
      'Torment I-VI',
      'Cursed chests',
      'Loot 2.0',
      'Paragon revamp',
      'Clans and Communities'
    ]
  },
  ah: {
    date: '2014-03-18',
    features: [
      'Auction House Removed'
    ]
  },
  ros: {
    date: '2014-03-25',
    features: [
      'Zone: Greyhollow Island',
      'Adventure Mode',
      'Bounties',
      'Nephalem Rifts',
      'Story Mode: Act V',
      'New Class: Crusader',
      'Stash Tab: 6',
      'Damage Numbers Abbreviated'
    ]
  },
  patch210: {
    date: '2014-08-26',
    features: [
      'Seasons',
      'Greater Rifts',
      'Leaderboards',
      'Stash Tab: 7'
    ]
  },
  patch212: {
    date: '2015-01-14',
    features: [
      'New Treasure Goblins [4] (Gem Hoarder, Blood Thief, Odious Collector, Malevolent Tormentor)',
      'Ancient Legendaries',
      'Recovery character sheet stat'
    ]
  },
  patch220: {
    date: '2015-04-08',
    features: [
      'New Treasure Goblins [3] (Insufferable Miscreant, Gelatinous Sire, Gilded Baron)',
      'Gem multicraft',
      'Blood shard cap increase from solo GR',
      'Mass looting',
      'Health Potions Removal',
      'Wardrobe'
    ]
  },
  patch230: {
    date: '2015-08-25',
    features: [
      // https://eu.battle.net/d3/en/game/patch-notes/2-3-0
      'Zone: The ruins of Sescheron',
      'Season Journey',
      "Kanai's Cube",
      'Torment VII-X'
    ]
  },
  patch240: {
    date: '2016-01-12',
    features: [
      'Season Rebirth',
      'Set Dungeons',
      'Empowered Rifts',
      'Action Combat',
      'UI: Buff Bar'
    ]
  },
  patch242: {
    // https://eu.battle.net/d3/en/game/patch-notes/2-4-2
    date: '2016-08-03',
    features: [
      'Torment XI-XIII'
    ],
  },
  patch250: {
    date: '2017-03-21',
    features: [
      'Armory',
      'Crafting Mat Storage',
      'Primal Legendaries'
    ],
  },
  patch260: {
    date: '2017-06-27',
    features: [
      'Challenge Rifts',
      'New Class: Necromancer'
    ]
  }
}

for (const key in featureList) {
  const data = featureList[key]
  for (const feature in data.features) {
    const f = {
      content: data.features[feature],
      start: data.date,
      group: 'features',
      style: featureStyle,
      type: 'point'
    }
    features.push(f)
  }
}

export default features
