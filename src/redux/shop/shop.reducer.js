const INITIAL_STATE ={ 
  SHOP_DATA:{
  hats:{
    id: 1,
    title: 'Hats',
    routeName: 'hats',
    items: [
      {
        id: "0195153448",
        name: "Classical Mythology",
        Author: "Mark P. O. Morford",
        Year_of_publication: 2002,
        Publisher: "Oxford University Press",
        imageUrl_s: "http://images.amazon.com/images/P/0195153448.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/0195153448.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/0195153448.01.LZZZZZZZ.jpg"
      },
      {
        id: "0002005018",
        name: "Clara Callan",
        Author: "Richard Bruce Wright",
        Year_of_publication: 2001,
        Publisher: "HarperFlamingo Canada",
        imageUrl_s: "http://images.amazon.com/images/P/0002005018.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/0002005018.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/0002005018.01.LZZZZZZZ.jpg"
      },
      {
        id: "0060973129",
        name: "Decision in Normandy",
        Author: "Carlo D'Este",
        Year_of_publication: 1991,
        Publisher: "HarperPerennial",
        imageUrl_s: "http://images.amazon.com/images/P/0060973129.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/0060973129.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/0060973129.01.LZZZZZZZ.jpg"
      },
      {
        id: "0374157065",
        name: "Flu: The Story of the Great Influenza Pandemic of 1918 and the Search for the Virus That Caused It",
        Author: "Gina Bari Kolata",
        Year_of_publication: 1999,
        Publisher: "Farrar Straus Giroux",
        imageUrl_s: "http://images.amazon.com/images/P/0374157065.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/0374157065.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/0374157065.01.LZZZZZZZ.jpg"
      },
      {
        id: "0393045218",
        name: "The Mummies of Urumchi",
        Author: "E. J. W. Barber",
        Year_of_publication: 1999,
        Publisher: "W. W. Norton &amp; Company",
        imageUrl_s: "http://images.amazon.com/images/P/0393045218.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/0393045218.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/0393045218.01.LZZZZZZZ.jpg"
      },
      {
        id: "0399135782",
        name: "The Kitchen God's Wife",
        Author: "Amy Tan",
        Year_of_publication: 1991,
        Publisher: "Putnam Pub Group",
        imageUrl_s: "http://images.amazon.com/images/P/0399135782.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/0399135782.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/0399135782.01.LZZZZZZZ.jpg"
      },
      {
        id: "0425176428",
        name: "What If?: The World's Foremost Military Historians Imagine What Might Have Been",
        Author: "Robert Cowley",
        Year_of_publication: 2000,
        Publisher: "Berkley Publishing Group",
        imageUrl_s: "http://images.amazon.com/images/P/0425176428.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/0425176428.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/0425176428.01.LZZZZZZZ.jpg"
      },
      {
        id: "0671870432",
        name: "PLEADING GUILTY",
        Author: "Scott Turow",
        Year_of_publication: 1993,
        Publisher: "Audioworks",
        imageUrl_s: "http://images.amazon.com/images/P/0671870432.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/0671870432.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/0671870432.01.LZZZZZZZ.jpg"
      },
      {
        id: "0679425608",
        name: "Under the Black Flag: The Romance and the Reality of Life Among the Pirates",
        Author: "David Cordingly",
        Year_of_publication: 1996,
        Publisher: "Random House",
        imageUrl_s: "http://images.amazon.com/images/P/0679425608.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/0679425608.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/0679425608.01.LZZZZZZZ.jpg"
      },
      {
        id: "074322678X",
        name: "Where You'll Find Me: And Other Stories",
        Author: "Ann Beattie",
        Year_of_publication: 2002,
        Publisher: "Scribner",
        imageUrl_s: "http://images.amazon.com/images/P/074322678X.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/074322678X.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/074322678X.01.LZZZZZZZ.jpg"
      },
      {
        id: "0771074670",
        name: "Nights Below Station Street",
        Author: "David Adams Richards",
        Year_of_publication: 1988,
        Publisher: "Emblem Editions",
        imageUrl_s: "http://images.amazon.com/images/P/0771074670.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/0771074670.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/0771074670.01.LZZZZZZZ.jpg"
      },
      {
        id: "080652121X",
        name: "Hitler's Secret Bankers: The Myth of Swiss Neutrality During the Holocaust",
        Author: "Adam Lebor",
        Year_of_publication: 2000,
        Publisher: "Citadel Press",
        imageUrl_s: "http://images.amazon.com/images/P/080652121X.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/080652121X.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/080652121X.01.LZZZZZZZ.jpg"
      },
      {
        id: "0887841740",
        name: "The Middle Stories",
        Author: "Sheila Heti",
        Year_of_publication: 2004,
        Publisher: "House of Anansi Press",
        imageUrl_s: "http://images.amazon.com/images/P/0887841740.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/0887841740.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/0887841740.01.LZZZZZZZ.jpg"
      },
      {
        id: "1552041778",
        name: "Jane Doe",
        Author: "R. J. Kaiser",
        Year_of_publication: 1999,
        Publisher: "Mira Books",
        imageUrl_s: "http://images.amazon.com/images/P/1552041778.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/1552041778.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/1552041778.01.LZZZZZZZ.jpg"
      },
      {
        id: "1558746218",
        name: "A Second Chicken Soup for the Woman's Soul (Chicken Soup for the Soul Series)",
        Author: "Jack Canfield",
        Year_of_publication: 1998,
        Publisher: "Health Communications",
        imageUrl_s: "http://images.amazon.com/images/P/1558746218.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/1558746218.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/1558746218.01.LZZZZZZZ.jpg"
      },
      {
        id: "1567407781",
        name: "The Witchfinder (Amos Walker Mystery Series)",
        Author: "Loren D. Estleman",
        Year_of_publication: 1998,
        Publisher: "Brilliance Audio - Trade",
        imageUrl_s: "http://images.amazon.com/images/P/1567407781.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/1567407781.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/1567407781.01.LZZZZZZZ.jpg"
      },
      {
        id: "1575663937",
        name: "More Cunning Than Man: A Social History of Rats and Man",
        Author: "Robert Hendrickson",
        Year_of_publication: 1999,
        Publisher: "Kensington Publishing Corp.",
        imageUrl_s: "http://images.amazon.com/images/P/1575663937.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/1575663937.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/1575663937.01.LZZZZZZZ.jpg"
      },
      
   
    ]
  },
  sneakers:{
    id: 2,
    title: 'Sneakers',
    routeName: 'sneakers',
    items: [
      {
        id: "0375410538",
        name: "Anil's Ghost",
        Author: "MICHAEL ONDAATJE",
        Year_of_publication: 2000,
        Publisher: "Knopf",
        imageUrl_s: "http://images.amazon.com/images/P/0375410538.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/0375410538.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/0375410538.01.LZZZZZZZ.jpg"
      },
      {
        id: "0966986105",
        name: "Prescription for Terror",
        Author: "Sandra Levy Ceren",
        Year_of_publication: 1999,
        Publisher: "Andrew Scott Publishers",
        imageUrl_s: "http://images.amazon.com/images/P/0966986105.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/0966986105.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/0966986105.01.LZZZZZZZ.jpg"
      },
      {
        id: "087113375X",
        name: "Modern Manners: An Etiquette Book for Rude People",
        Author: "P.J. O'Rourke",
        Year_of_publication: 1990,
        Publisher: "Atlantic Monthly Press",
        imageUrl_s: "http://images.amazon.com/images/P/087113375X.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/087113375X.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/087113375X.01.LZZZZZZZ.jpg"
      },
      {
        id: "0340767936",
        name: "Turning Thirty",
        Author: "Mike Gayle",
        Year_of_publication: 2000,
        Publisher: "Hodder &amp; Stoughton General Division",
        imageUrl_s: "http://images.amazon.com/images/P/0340767936.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/0340767936.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/0340767936.01.LZZZZZZZ.jpg"
      },
      {
        id: "0743403843",
        name: "Decipher",
        Author: "Stel Pavlou",
        Year_of_publication: 2002,
        Publisher: "Simon &amp; Schuster (Trade Division)",
        imageUrl_s: "http://images.amazon.com/images/P/0743403843.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/0743403843.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/0743403843.01.LZZZZZZZ.jpg"
      },
      {
        id: "0060930365",
        name: "My First Cousin Once Removed: Money, Madness, and the Family of Robert Lowell",
        Author: "Sarah Payne Stuart",
        Year_of_publication: 1999,
        Publisher: "Perennial",
        imageUrl_s: "http://images.amazon.com/images/P/0060930365.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/0060930365.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/0060930365.01.LZZZZZZZ.jpg"
      },
      {
        id: "0060177586",
        name: "Standing Firm: A Vice-Presidential Memoir",
        Author: "Dan Quayle",
        Year_of_publication: 1994,
        Publisher: "Harpercollins",
        imageUrl_s: "http://images.amazon.com/images/P/0060177586.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/0060177586.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/0060177586.01.LZZZZZZZ.jpg"
      },
      {
        id: "0071416331",
        name: "Team Bush : Leadership Lessons from the Bush White House",
        Author: "Donald F. Kettl",
        Year_of_publication: 2003,
        Publisher: "McGraw-Hill",
        imageUrl_s: "http://images.amazon.com/images/P/0071416331.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/0071416331.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/0071416331.01.LZZZZZZZ.jpg"
      },
      {
        id: "0375509038",
        name: "The Right Man : The Surprise Presidency of George W. Bush",
        Author: "DAVID FRUM",
        Year_of_publication: 2003,
        Publisher: "Random House",
        imageUrl_s: "http://images.amazon.com/images/P/0375509038.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/0375509038.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/0375509038.01.LZZZZZZZ.jpg"
      },
      {
        id: "0553062042",
        name: "Daybreakers Louis Lamour Collection",
        Author: "Louis Lamour",
        Year_of_publication: 1981,
        Publisher: "Bantam Doubleday Dell",
        imageUrl_s: "http://images.amazon.com/images/P/0553062042.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/0553062042.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/0553062042.01.LZZZZZZZ.jpg"
      },
      {
        id: "0316769487",
        name: "The Catcher in the Rye",
        Author: "J.D. Salinger",
        Year_of_publication: 1991,
        Publisher: "Little, Brown",
        imageUrl_s: "http://images.amazon.com/images/P/0316769487.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/0316769487.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/0316769487.01.LZZZZZZZ.jpg"
      },
      {
        id: "8445071408",
        name: "El Senor De Los Anillos: LA Comunidad Del Anillo (Lord of the Rings (Spanish))",
        Author: "J. R. R. Tolkien",
        Year_of_publication: 2001,
        Publisher: "Minotauro",
        imageUrl_s: "http://images.amazon.com/images/P/8445071408.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/8445071408.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/8445071408.01.LZZZZZZZ.jpg"
      },
      {
        id: "8445071769",
        name: "El Senor De Los Anillos: Las DOS Torres (Lord of the Rings (Paperback))",
        Author: "J. R. R. Tolkien",
        Year_of_publication: 2001,
        Publisher: "Minotauro",
        imageUrl_s: "http://images.amazon.com/images/P/8445071769.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/8445071769.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/8445071769.01.LZZZZZZZ.jpg"
      },
      {
        id: "8445071777",
        name: "El Senor De Los Anillos: El Retorno Del Rey (Tolkien, J. R. R. Lord of the Rings. 3.)",
        Author: "J. R. R. Tolkien",
        Year_of_publication: 2001,
        Publisher: "Distribooks",
        imageUrl_s: "http://images.amazon.com/images/P/8445071777.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/8445071777.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/8445071777.01.LZZZZZZZ.jpg"
      },
      {
        id: "0679429220",
        name: "Midnight in the Garden of Good and Evil: A Savannah Story",
        Author: "John Berendt",
        Year_of_publication: 1994,
        Publisher: "Random House",
        imageUrl_s: "http://images.amazon.com/images/P/0679429220.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/0679429220.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/0679429220.01.LZZZZZZZ.jpg"
      },
      {
        id: "0671867156",
        name: "Pretend You Don't See Her",
        Author: "Mary Higgins Clark",
        Year_of_publication: 1998,
        Publisher: "Pocket",
        imageUrl_s: "http://images.amazon.com/images/P/0671867156.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/0671867156.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/0671867156.01.LZZZZZZZ.jpg"
      },
      {
        id: "0312252617",
        name: "Fast Women",
        Author: "Jennifer Crusie",
        Year_of_publication: 2001,
        Publisher: "St. Martin's Press",
        imageUrl_s: "http://images.amazon.com/images/P/0312252617.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/0312252617.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/0312252617.01.LZZZZZZZ.jpg"
      },
      {
        id: "0312261594",
        name: "Female Intelligence",
        Author: "Jane Heller",
        Year_of_publication: 2001,
        Publisher: "St. Martin's Press",
        imageUrl_s: "http://images.amazon.com/images/P/0312261594.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/0312261594.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/0312261594.01.LZZZZZZZ.jpg"
      },
      {
        id: "0316748641",
        name: "Pasquale's Nose: Idle Days in an Italian Town",
        Author: "Michael Rips",
        Year_of_publication: 2002,
        Publisher: "Back Bay Books",
        imageUrl_s: "http://images.amazon.com/images/P/0316748641.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/0316748641.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/0316748641.01.LZZZZZZZ.jpg"
      }
    
          
    ]
  },
  jackets:{
    id: 3,
    title: 'Jackets',
    routeName: 'jackets',
    items: [
      {
        id: "0679865691",
        name: "Haveli (Laurel Leaf Books)",
        Author: "SUZANNE FISHER STAPLES",
        Year_of_publication: 1995,
        Publisher: "Laurel Leaf",
        imageUrl_s: "http://images.amazon.com/images/P/0679865691.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/0679865691.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/0679865691.01.LZZZZZZZ.jpg"
      },
      {
        id: "2070423204",
        name: "Lieux dits",
        Author: "Michel Tournier",
        Year_of_publication: 2002,
        Publisher: "Gallimard",
        imageUrl_s: "http://images.amazon.com/images/P/2070423204.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/2070423204.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/2070423204.01.LZZZZZZZ.jpg"
      },
      {
        id: "0345260317",
        name: "The Dragons of Eden: Speculations on the Evolution of Human Intelligence",
        Author: "Carl Sagan",
        Year_of_publication: 1978,
        Publisher: "Ballantine Books",
        imageUrl_s: "http://images.amazon.com/images/P/0345260317.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/0345260317.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/0345260317.01.LZZZZZZZ.jpg"
      },
      {
        id: "0394743741",
        name: "The yawning heights",
        Author: "Aleksandr Zinoviev",
        Year_of_publication: 1980,
        Publisher: "Random House",
        imageUrl_s: "http://images.amazon.com/images/P/0394743741.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/0394743741.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/0394743741.01.LZZZZZZZ.jpg"
      },
      {
        id: "042511774X",
        name: "Breathing Lessons",
        Author: "Anne Tyler",
        Year_of_publication: 1994,
        Publisher: "Berkley Publishing Group",
        imageUrl_s: "http://images.amazon.com/images/P/042511774X.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/042511774X.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/042511774X.01.LZZZZZZZ.jpg"
      },
      {
        id: "0804106304",
        name: "The Joy Luck Club",
        Author: "Amy Tan",
        Year_of_publication: 1994,
        Publisher: "Prentice Hall (K-12)",
        imageUrl_s: "http://images.amazon.com/images/P/0804106304.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/0804106304.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/0804106304.01.LZZZZZZZ.jpg"
      },
      {
        id: "1853262404",
        name: "Heart of Darkness (Wordsworth Collection)",
        Author: "Joseph Conrad",
        Year_of_publication: 1998,
        Publisher: "NTC/Contemporary Publishing Company",
        imageUrl_s: "http://images.amazon.com/images/P/1853262404.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/1853262404.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/1853262404.01.LZZZZZZZ.jpg"
      },
      {
        id: "0312970242",
        name: "The Angel Is Near",
        Author: "Deepak Chopra",
        Year_of_publication: 2000,
        Publisher: "St. Martin's Press",
        imageUrl_s: "http://images.amazon.com/images/P/0312970242.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/0312970242.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/0312970242.01.LZZZZZZZ.jpg"
      },
      {
        id: "1853260053",
        name: "Tess of the D'Urbervilles (Wordsworth Classics)",
        Author: "Thomas Hardy",
        Year_of_publication: 1997,
        Publisher: "NTC/Contemporary Publishing Company",
        imageUrl_s: "http://images.amazon.com/images/P/1853260053.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/1853260053.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/1853260053.01.LZZZZZZZ.jpg"
      },
      {
        id: "1414035004",
        name: "The Adventures of Drew and Ellie: The Magical Dress",
        Author: "Charles Noland",
        Year_of_publication: 2003,
        Publisher: "1stBooks Library",
        imageUrl_s: "http://images.amazon.com/images/P/1414035004.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/1414035004.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/1414035004.01.LZZZZZZZ.jpg"
      },
      {
        id: "0060938412",
        name: "The Accidental Virgin",
        Author: "Valerie Frankel",
        Year_of_publication: 2003,
        Publisher: "Avon Trade",
        imageUrl_s: "http://images.amazon.com/images/P/0060938412.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/0060938412.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/0060938412.01.LZZZZZZZ.jpg"
      },
      {
        id: "0140067477",
        name: "The Tao of Pooh",
        Author: "Benjamin Hoff",
        Year_of_publication: 1983,
        Publisher: "Penguin Books",
        imageUrl_s: "http://images.amazon.com/images/P/0140067477.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/0140067477.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/0140067477.01.LZZZZZZZ.jpg"
      },
      {
        id: "0345465083",
        name: "Seabiscuit",
        Author: "LAURA HILLENBRAND",
        Year_of_publication: 2003,
        Publisher: "Ballantine Books",
        imageUrl_s: "http://images.amazon.com/images/P/0345465083.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/0345465083.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/0345465083.01.LZZZZZZZ.jpg"
      },
      {
        id: "0451625889",
        name: "The Prince",
        Author: "Niccolo Machiavelli",
        Year_of_publication: 1952,
        Publisher: "Signet Book",
        imageUrl_s: "http://images.amazon.com/images/P/0451625889.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/0451625889.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/0451625889.01.LZZZZZZZ.jpg"
      },
      {
        id: "1558531025",
        name: "Life's Little Instruction Book (Life's Little Instruction Books (Paperback))",
        Author: "H. Jackson Brown",
        Year_of_publication: 1991,
        Publisher: "Thomas Nelson",
        imageUrl_s: "http://images.amazon.com/images/P/1558531025.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/1558531025.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/1558531025.01.LZZZZZZZ.jpg"
      },
      {
        id: "0441783589",
        name: "Starship Troopers",
        Author: "Robert A. Heinlein",
        Year_of_publication: 1987,
        Publisher: "Ace Books",
        imageUrl_s: "http://images.amazon.com/images/P/0441783589.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/0441783589.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/0441783589.01.LZZZZZZZ.jpg"
      },
      {
        id: "0394895894",
        name: "The Ruby in the Smoke (Sally Lockhart Trilogy, Book 1)",
        Author: "PHILIP PULLMAN",
        Year_of_publication: 1988,
        Publisher: "Laurel Leaf",
        imageUrl_s: "http://images.amazon.com/images/P/0394895894.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/0394895894.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/0394895894.01.LZZZZZZZ.jpg"
      },
      {
        id: "1569871213",
        name: "Black Beauty (Illustrated Classics)",
        Author: "Anna Sewell",
        Year_of_publication: 1995,
        Publisher: "Landoll",
        imageUrl_s: "http://images.amazon.com/images/P/1569871213.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/1569871213.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/1569871213.01.LZZZZZZZ.jpg"
      },
    ]
  },
  womens:{
    id: 4,
    title: 'Womens',
    routeName: 'womens',
    items: [
      {
        id: "0060168013",
        name: "Pigs in Heaven",
        Author: "Barbara Kingsolver",
        Year_of_publication: 1993,
        Publisher: "Harpercollins",
        imageUrl_s: "http://images.amazon.com/images/P/0060168013.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/0060168013.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/0060168013.01.LZZZZZZZ.jpg"
      },
      {
        id: "038078243X",
        name: "Miss Zukas and the Raven's Dance",
        Author: "Jo Dereske",
        Year_of_publication: 1996,
        Publisher: "Avon",
        imageUrl_s: "http://images.amazon.com/images/P/038078243X.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/038078243X.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/038078243X.01.LZZZZZZZ.jpg"
      },
      {
        id: "055321215X",
        name: "Pride and Prejudice",
        Author: "Jane Austen",
        Year_of_publication: 1983,
        Publisher: "Bantam",
        imageUrl_s: "http://images.amazon.com/images/P/055321215X.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/055321215X.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/055321215X.01.LZZZZZZZ.jpg"
      },
      {
        id: "067176537X",
        name: "The Therapeutic Touch: How to Use Your Hands to Help or to Heal",
        Author: "Dolores Krieger",
        Year_of_publication: 1979,
        Publisher: "Fireside",
        imageUrl_s: "http://images.amazon.com/images/P/067176537X.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/067176537X.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/067176537X.01.LZZZZZZZ.jpg"
      },
      {
        id: "0061099686",
        name: "Downtown",
        Author: "Anne Rivers Siddons",
        Year_of_publication: 1995,
        Publisher: "HarperTorch",
        imageUrl_s: "http://images.amazon.com/images/P/0061099686.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/0061099686.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/0061099686.01.LZZZZZZZ.jpg"
      },
      {
        id: "0553582909",
        name: "Icebound",
        Author: "Dean R. Koontz",
        Year_of_publication: 2000,
        Publisher: "Bantam Books",
        imageUrl_s: "http://images.amazon.com/images/P/0553582909.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/0553582909.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/0553582909.01.LZZZZZZZ.jpg"
      },
      {
        id: "0671888587",
        name: "I'll Be Seeing You",
        Author: "Mary Higgins Clark",
        Year_of_publication: 1994,
        Publisher: "Pocket",
        imageUrl_s: "http://images.amazon.com/images/P/0671888587.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/0671888587.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/0671888587.01.LZZZZZZZ.jpg"
      },
      {
        id: "0553582747",
        name: "From the Corner of His Eye",
        Author: "Dean Koontz",
        Year_of_publication: 2001,
        Publisher: "Bantam Books",
        imageUrl_s: "http://images.amazon.com/images/P/0553582747.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/0553582747.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/0553582747.01.LZZZZZZZ.jpg"
      },
      {
        id: "0425182908",
        name: "Isle of Dogs",
        Author: "Patricia Cornwell",
        Year_of_publication: 2002,
        Publisher: "Berkley Publishing Group",
        imageUrl_s: "http://images.amazon.com/images/P/0425182908.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/0425182908.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/0425182908.01.LZZZZZZZ.jpg"
      },
      {
        id: "042518630X",
        name: "Purity in Death",
        Author: "J.D. Robb",
        Year_of_publication: 2002,
        Publisher: "Berkley Publishing Group",
        imageUrl_s: "http://images.amazon.com/images/P/042518630X.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/042518630X.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/042518630X.01.LZZZZZZZ.jpg"
      },
      {
        id: "0440223571",
        name: "This Year It Will Be Different: And Other Stories",
        Author: "Maeve Binchy",
        Year_of_publication: 1997,
        Publisher: "Dell",
        imageUrl_s: "http://images.amazon.com/images/P/0440223571.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/0440223571.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/0440223571.01.LZZZZZZZ.jpg"
      },
      {
        id: "0812523873",
        name: "Proxies",
        Author: "Laura J. Mixon",
        Year_of_publication: 1999,
        Publisher: "Tor Books",
        imageUrl_s: "http://images.amazon.com/images/P/0812523873.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/0812523873.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/0812523873.01.LZZZZZZZ.jpg"
      },
      {
        id: "0842342702",
        name: "Left Behind: A Novel of the Earth's Last Days (Left Behind #1)",
        Author: "Tim Lahaye",
        Year_of_publication: 2000,
        Publisher: "Tyndale House Publishers",
        imageUrl_s: "http://images.amazon.com/images/P/0842342702.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/0842342702.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/0842342702.01.LZZZZZZZ.jpg"
      },
      {
        id: "0440225701",
        name: "The Street Lawyer",
        Author: "JOHN GRISHAM",
        Year_of_publication: 1999,
        Publisher: "Dell",
        imageUrl_s: "http://images.amazon.com/images/P/0440225701.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/0440225701.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/0440225701.01.LZZZZZZZ.jpg"
      },
      {
        id: "0060914068",
        name: "Love, Medicine and Miracles",
        Author: "M.D. Bernie S. Siegel",
        Year_of_publication: 1988,
        Publisher: "HarperCollins Publishers",
        imageUrl_s: "http://images.amazon.com/images/P/0060914068.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/0060914068.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/0060914068.01.LZZZZZZZ.jpg"
      },
      {
        id: "0156047624",
        name: "All the King's Men",
        Author: "Robert Penn Warren",
        Year_of_publication: 1982,
        Publisher: "Harvest Books",
        imageUrl_s: "http://images.amazon.com/images/P/0156047624.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/0156047624.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/0156047624.01.LZZZZZZZ.jpg"
      },
      {
        id: "0245542957",
        name: "Pacific Northwest",
        Author: "Hans Johannes Hoefer",
        Year_of_publication: 1985,
        Publisher: "Chambers Harrap Publishers Ltd",
        imageUrl_s: "http://images.amazon.com/images/P/0245542957.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/0245542957.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/0245542957.01.LZZZZZZZ.jpg"
      },
      {
        id: "0380715899",
        name: "A Soldier of the Great War",
        Author: "Mark Helprin",
        Year_of_publication: 1992,
        Publisher: "Avon Books",
        imageUrl_s: "http://images.amazon.com/images/P/0380715899.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/0380715899.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/0380715899.01.LZZZZZZZ.jpg"
      },
      {
        id: "0553280333",
        name: "Getting Well Again",
        Author: "O. Carol Simonton Md",
        Year_of_publication: 1992,
        Publisher: "Bantam",
        imageUrl_s: "http://images.amazon.com/images/P/0553280333.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/0553280333.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/0553280333.01.LZZZZZZZ.jpg"
      },
      {
        id: "0961769947",
        name: "Northwest Wines and Wineries",
        Author: "Chuck Hill",
        Year_of_publication: 1993,
        Publisher: "Speed Graphics",
        imageUrl_s: "http://images.amazon.com/images/P/0961769947.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/0961769947.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/0961769947.01.LZZZZZZZ.jpg"
      },
      {
        id: "0964778319",
        name: "An Atmosphere of Eternity: Stories of India",
        Author: "David Iglehart",
        Year_of_publication: 2002,
        Publisher: "Sunflower Press",
        imageUrl_s: "http://images.amazon.com/images/P/0964778319.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/0964778319.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/0964778319.01.LZZZZZZZ.jpg"
      },
      {
        id: "0671623249",
        name: "LONESOME DOVE",
        Author: "Larry McMurtry",
        Year_of_publication: 1986,
        Publisher: "Pocket",
        imageUrl_s: "http://images.amazon.com/images/P/0671623249.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/0671623249.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/0671623249.01.LZZZZZZZ.jpg"
      },
      {
        id: "0679810307",
        name: "Shabanu: Daughter of the Wind (Border Trilogy)",
        Author: "SUZANNE FISHER STAPLES",
        Year_of_publication: 1991,
        Publisher: "Laurel Leaf",
        imageUrl_s: "http://images.amazon.com/images/P/0679810307.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/0679810307.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/0679810307.01.LZZZZZZZ.jpg"
      },
      
    ]
  },
  mens:{
    id: 5,
    title: 'Mens',
    routeName: 'mens',
    items: [
      {
        id: "1881320189",
        name: "Goodbye to the Buttermilk Sky",
        Author: "Julia Oliver",
        Year_of_publication: 1994,
        Publisher: "River City Pub",
        imageUrl_s: "http://images.amazon.com/images/P/1881320189.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/1881320189.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/1881320189.01.LZZZZZZZ.jpg"
      },
      {
        id: "0440234743",
        name: "The Testament",
        Author: "John Grisham",
        Year_of_publication: 1999,
        Publisher: "Dell",
        imageUrl_s: "http://images.amazon.com/images/P/0440234743.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/0440234743.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/0440234743.01.LZZZZZZZ.jpg"
      },
      {
        id: "0452264464",
        name: "Beloved (Plume Contemporary Fiction)",
        Author: "Toni Morrison",
        Year_of_publication: 1994,
        Publisher: "Plume",
        imageUrl_s: "http://images.amazon.com/images/P/0452264464.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/0452264464.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/0452264464.01.LZZZZZZZ.jpg"
      },
      {
        id: "0609804618",
        name: "Our Dumb Century: The Onion Presents 100 Years of Headlines from America's Finest News Source",
        Author: "The Onion",
        Year_of_publication: 1999,
        Publisher: "Three Rivers Press",
        imageUrl_s: "http://images.amazon.com/images/P/0609804618.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/0609804618.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/0609804618.01.LZZZZZZZ.jpg"
      },
      {
        id: "1841721522",
        name: "New Vegetarian: Bold and Beautiful Recipes for Every Occasion",
        Author: "Celia Brooks Brown",
        Year_of_publication: 2001,
        Publisher: "Ryland Peters &amp; Small Ltd",
        imageUrl_s: "http://images.amazon.com/images/P/1841721522.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/1841721522.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/1841721522.01.LZZZZZZZ.jpg"
      },
      {
        id: "1879384493",
        name: "If I'd Known Then What I Know Now: Why Not Learn from the Mistakes of Others? : You Can't Afford to Make Them All Yourself",
        Author: "J. R. Parrish",
        Year_of_publication: 2003,
        Publisher: "Cypress House",
        imageUrl_s: "http://images.amazon.com/images/P/1879384493.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/1879384493.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/1879384493.01.LZZZZZZZ.jpg"
      },
      {
        id: "0061076031",
        name: "Mary-Kate &amp; Ashley Switching Goals (Mary-Kate and Ashley Starring in)",
        Author: "Mary-Kate &amp; Ashley Olsen",
        Year_of_publication: 2000,
        Publisher: "HarperEntertainment",
        imageUrl_s: "http://images.amazon.com/images/P/0061076031.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/0061076031.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/0061076031.01.LZZZZZZZ.jpg"
      },
      {
        id: "0439095026",
        name: "Tell Me This Isn't Happening",
        Author: "Robynn Clairday",
        Year_of_publication: 1999,
        Publisher: "Scholastic",
        imageUrl_s: "http://images.amazon.com/images/P/0439095026.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/0439095026.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/0439095026.01.LZZZZZZZ.jpg"
      },
      {
        id: "0689821166",
        name: "Flood : Mississippi 1927",
        Author: "Kathleen Duey",
        Year_of_publication: 1998,
        Publisher: "Aladdin",
        imageUrl_s: "http://images.amazon.com/images/P/0689821166.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/0689821166.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/0689821166.01.LZZZZZZZ.jpg"
      },
      {
        id: "0971880107",
        name: "Wild Animus",
        Author: "Rich Shapero",
        Year_of_publication: 2004,
        Publisher: "Too Far",
        imageUrl_s: "http://images.amazon.com/images/P/0971880107.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/0971880107.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/0971880107.01.LZZZZZZZ.jpg"
      },
      {
        id: "0345402871",
        name: "Airframe",
        Author: "Michael Crichton",
        Year_of_publication: 1997,
        Publisher: "Ballantine Books",
        imageUrl_s: "http://images.amazon.com/images/P/0345402871.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/0345402871.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/0345402871.01.LZZZZZZZ.jpg"
      },
      {
        id: "0345417623",
        name: "Timeline",
        Author: "MICHAEL CRICHTON",
        Year_of_publication: 2000,
        Publisher: "Ballantine Books",
        imageUrl_s: "http://images.amazon.com/images/P/0345417623.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/0345417623.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/0345417623.01.LZZZZZZZ.jpg"
      },
      {
        id: "0684823802",
        name: "OUT OF THE SILENT PLANET",
        Author: "C.S. Lewis",
        Year_of_publication: 1996,
        Publisher: "Scribner",
        imageUrl_s: "http://images.amazon.com/images/P/0684823802.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/0684823802.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/0684823802.01.LZZZZZZZ.jpg"
      },
      {
        id: "0375759778",
        name: "Prague : A Novel",
        Author: "ARTHUR PHILLIPS",
        Year_of_publication: 2003,
        Publisher: "Random House Trade Paperbacks",
        imageUrl_s: "http://images.amazon.com/images/P/0375759778.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/0375759778.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/0375759778.01.LZZZZZZZ.jpg"
      },
      {
        id: "0425163091",
        name: "Chocolate Jesus",
        Author: "Stephan Jaramillo",
        Year_of_publication: 1998,
        Publisher: "Berkley Publishing Group",
        imageUrl_s: "http://images.amazon.com/images/P/0425163091.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/0425163091.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/0425163091.01.LZZZZZZZ.jpg"
      },
      {
        id: "3404921038",
        name: "Wie Barney es sieht.",
        Author: "Mordecai Richler",
        Year_of_publication: 2002,
        Publisher: "L�?¼bbe",
        imageUrl_s: "http://images.amazon.com/images/P/3404921038.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/3404921038.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/3404921038.01.LZZZZZZZ.jpg"
      },
      {
        id: "3442353866",
        name: "Der Fluch der Kaiserin. Ein Richter- Di- Roman.",
        Author: "Eleanor Cooney",
        Year_of_publication: 2001,
        Publisher: "Goldmann",
        imageUrl_s: "http://images.amazon.com/images/P/3442353866.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/3442353866.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/3442353866.01.LZZZZZZZ.jpg"
      },
      {
        id: "3442410665",
        name: "Sturmzeit. Roman.",
        Author: "Charlotte Link",
        Year_of_publication: 1991,
        Publisher: "Goldmann",
        imageUrl_s: "http://images.amazon.com/images/P/3442410665.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/3442410665.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/3442410665.01.LZZZZZZZ.jpg"
      },
      {
        id: "3442446937",
        name: "Tage der Unschuld.",
        Author: "Richard North Patterson",
        Year_of_publication: 2000,
        Publisher: "Goldmann",
        imageUrl_s: "http://images.amazon.com/images/P/3442446937.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/3442446937.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/3442446937.01.LZZZZZZZ.jpg"
      },
      {
        id: "0375406328",
        name: "Lying Awake",
        Author: "Mark Salzman",
        Year_of_publication: 2000,
        Publisher: "Alfred A. Knopf",
        imageUrl_s: "http://images.amazon.com/images/P/0375406328.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/0375406328.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/0375406328.01.LZZZZZZZ.jpg"
      },
      {
        id: "0446310786",
        name: "To Kill a Mockingbird",
        Author: "Harper Lee",
        Year_of_publication: 1988,
        Publisher: "Little Brown &amp; Company",
        imageUrl_s: "http://images.amazon.com/images/P/0446310786.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/0446310786.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/0446310786.01.LZZZZZZZ.jpg"
      },
      {
        id: "0449005615",
        name: "Seabiscuit: An American Legend",
        Author: "LAURA HILLENBRAND",
        Year_of_publication: 2002,
        Publisher: "Ballantine Books",
        imageUrl_s: "http://images.amazon.com/images/P/0449005615.01.THUMBZZZ.jpg",
        imageUrl_m: "http://images.amazon.com/images/P/0449005615.01.MZZZZZZZ.jpg",
        imageUrl_l: "http://images.amazon.com/images/P/0449005615.01.LZZZZZZZ.jpg"
      },
    
    ]
  }
}
};
  
  
const shopReducer=(state=INITIAL_STATE,action) =>{
      switch(action.type){
        default:
            return state;
    };


  }

export default shopReducer;  
  