const groups = [
  // Patches
  {
    id: 'patches_live_prepatch',
    order: 3,
    content: 'Live (Pre-Patch)'
  },
  {
    id: 'patches_ptr',
    order: 4,
    content: 'PTR'
  },
  {
    id: 'patches_live',
    order: 5,
    content: 'Live'
  },
  {
    id: 'patches_live_alt',
    order: 6,
    content: 'Live (Alternate)',
  },
  {
    id: 'patches',
    order: 2,
    content: 'Patches',
    nestedGroups: [
      'patches_ptr',
      'patches_live',
      'patches_live_alt',
      'patches_live_prepatch',
    ]
  },
  // Releases
  { id: 'releases', order: 1, content: 'Releases' }
]

export default groups
