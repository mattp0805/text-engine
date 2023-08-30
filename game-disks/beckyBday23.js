// This simple game disk can be used as a starting point to create a new adventure.
// Change anything you want, add new rooms, etc.
const newDiskTemplate = () => ({
  roomId: 'start', // Set this to the ID of the room you want the player to start in.
  rooms: [
    {
      id: 'start', // Unique identifier for this room. Entering a room will set the disk's roomId to this.
      name: 'The Co-working Space', // Displayed each time the player enters the room.
      desc: `You're welcomed into the co-working space by a polite receptionist, peeking out slightly from behind a large PEACE LILY. 
      
      They ask you if you've been here before, and offer you a glass of WATER, and a KEYCARD to enter the office space.  
      
      Behind you is an ELEVATOR and a door out into a COURTYARD.
      Type LOOK [item] to look at an item.
      Type TAKE [item] to take an item.
      Type ITEMS to see a list of items in the room.`, // Displayed when the player first enters the room.
      exits: [{
        dir: 'to elevator', // "dir" can be anything. If it's north, the player will type "go north" to get to the room called "A Forest Clearing".
        id: 'elevator',
        block: `Th`, // If an exit has a block, the player will not be able to go that direction until the block is removed.
      }, courtyard],
      items: [
        {
          name: 'peace lily',
          desc: `You look at the PEACE LILY, the more you stare, the more you notice how wilted it is.`, // Displayed when the player looks at the item.
        },
        {
          name: ['bottle', 'water', 'bottle of water'], // The player can refer to this item by either name. The game will use the first name.
          desc: `The water looks nice and cold.`,
          isTakeable: true,
          onUse: () => {
            const room = getRoom('office');
            if(room )
            println(`You're more hydrated than ever, nice!`)
            if 
          }
        },
        {
          name: 'axe',
          desc: `You could probably USE it to cut the VINES, unblocking the door.`,
          isTakeable: true, // Allows the player to take the item.
          onUse() {
            // Remove the block on the room's only exit.
            const room = getRoom('start');
            const exit = getExit('north', room.exits);

            if (exit.block) {
              delete exit.block;
              println(`You cut through the vines, unblocking the door to the NORTH.`);

              // Update the axe's description.
              getItem('axe').desc = `You USED it to cut the VINES, unblocking the door.`;
            } else {
              println(`There is nothing to use the axe on.`);
            }
          },
        }
      ],
      exits: [
        {
          dir: 'north', // "dir" can be anything. If it's north, the player will type "go north" to get to the room called "A Forest Clearing".
          id: 'clearing',
          block: `The DOOR leading NORTH is overgrown with VINES.`, // If an exit has a block, the player will not be able to go that direction until the block is removed.
        },
      ],
    },
    {
      id: 'clearing',
      name: 'A Forest Clearing',
      desc: `It's a forest clearing. To the SOUTH is The First Room.`,
      exits: [
        {
          dir: 'south',
          id: 'start',
        },
      ],
    }
  ],
});
