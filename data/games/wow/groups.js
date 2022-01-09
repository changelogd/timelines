const groups = [
  // Patches
  {
    id: 'patches_ptr',
    order: 3,
    content: 'PTR'
  },
  {
    id: 'patches_live',
    order: 4,
    content: 'Live'
  },
  {
    id: 'patches',
    order: 2,
    content: 'Patches',
    nestedGroups: [
      'patches_ptr',
      'patches_live'
    ]
  },
  // Releases
  { id: 'releases', order: 1, content: 'Releases' }
]

export default groups
