var groups = [

    // World of Warcraft
        {
            id: 'wow_minor_patches',
            order: 2,
            content: 'Minor Patches'
        },
        {
            id: 'wow_patches',
            order: 3,
            content: 'Patches'
        },
    { id: 1, order: 1, content: 'World of Warcraft', nestedGroups: ['wow_patches', 'wow_minor_patches'] },

    // Burning Crusade
    { id: 2, order: 4, content: 'The Burning Crusade' },

    // Wrath
    { id: 3, order: 5, content: 'Wrath of the Lich King' },

    // Cata
    { id: 4, order: 6, content: 'Cataclysm' },

    // Mists
    { id: 5, order: 7, content: 'Mists of Pandaria' },

    // Warlords
    { id: 6, order: 8, content: 'Warlords of Draenor' },

    // Legion
        {
            id: 'legion_patches',
            order: 11,
            content: 'Patches'
        },
        {
            id: 'legion_ptr',
            order: 10,
            content: 'PTR'
        },
    {
        id: 7,
        order: 9,
        content: 'Legion',
        nestedGroups: [ 'legion_patches', 'legion_ptr' ]
    }
];
