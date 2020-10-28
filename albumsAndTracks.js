class album {
  constructor(artist, album, albumDesc, releaseDate, genre, imageUrl, rating) {
    this.artist = artist;
    this.album = album;
    this.albumDesc = albumDesc;
    this.releaseDate = releaseDate;
    this.genre = genre;
    this.imageUrl = imageUrl;
    this.rating = rating;
  }
}
let albums = [];
const addAlbum = function (album) {
  albums.push(album);
  localStorage.setItem(album.album, JSON.stringify(album));
};

class track {
  constructor(title, duration, album) {
    this.title = title;
    this.duration = duration;
    this.album = album;
  }
}

let tracks = [];

const addTrack = function (track) {
  tracks.push(track);
};

let taylorSwift = new album(
  "Taylor Swift",
  "Folklore",
  "Folklore is the eighth studio album by American singer-songwriter Taylor Swift. It was a surprise album, released through Republic Records on July 24, 2020, eleven months after its predecessor, Lover.",
  "24 July 2020",
  "Pop Music",
  "images/album/Taylor_Swift_Folklore.png",
  "4"
);
addAlbum(taylorSwift);

let taylorSwift1 = new track("The 1", "3:31", "Folklore");
addTrack(taylorSwift1);
let taylorSwift2 = new track("Cardigan", "4:01", "Folklore");
addTrack(taylorSwift2);
let taylorSwift3 = new track(
  "The Last Great American Dynasty",
  "3:44",
  "Folklore"
);
addTrack(taylorSwift3);
let taylorSwift4 = new track("Exile", "4:46", "Folklore");
addTrack(taylorSwift4);
let taylorSwift5 = new track("My Tears Ricochet", "4:16", "Folklore");
addTrack(taylorSwift5);
let taylorSwift6 = new track("Mirrorball", "3:29", "Folklore");
addTrack(taylorSwift6);
let taylorSwift7 = new track("Seven", "3:29", "Folklore");
addTrack(taylorSwift7);
let taylorSwift8 = new track("August", "4:14", "Folklore");
addTrack(taylorSwift8);
let taylorSwift9 = new track("This is me trying", "3:16", "Folklore");
addTrack(taylorSwift9);
let taylorSwift10 = new track("Illicit Affairs", "3:23", "Folklore");
addTrack(taylorSwift10);
let taylorSwift11 = new track("Invisible String", "4:13", "Folklore");
addTrack(taylorSwift11);
let taylorSwift12 = new track("Mad Woman", "3:58", "Folklore");
addTrack(taylorSwift12);
let taylorSwift13 = new track("Epiphany", "4:50", "Folklore");
addTrack(taylorSwift13);
let taylorSwift14 = new track("Betty", "5:17", "Folklore");
addTrack(taylorSwift14);
let taylorSwift15 = new track("Peace", "5:51", "Folklore");
addTrack(taylorSwift15);
let taylorSwift16 = new track("Hoax", "3:41", "Folklore");
addTrack(taylorSwift16);

let tomPetty = new album(
  "Tom Petty",
  "Wildflowers",
  "Wildflowers is the second solo studio album by American musician Tom Petty, released on November 1, 1994. The album was the first released by Petty after signing a contract with Warner Bros. Records and the first of three albums produced by Rick Rubin.",
  "1 November 1994",
  "Rock and Roll",
  "images/album/Tom_Petty_Wildflowers.jpg",
  "4"
);
addAlbum(tomPetty);
let tomPetty1 = new track("Wildflowers", "3:14", "Wildflowers");
let tomPetty2 = new track("You Don't Know How It Feels", "4:49", "Wildflowers");
let tomPetty3 = new track("Time to Move On", "3:15", "Wildflowers");
let tomPetty4 = new track("You Wreck Me", "6:03", "Wildflowers");
let tomPetty5 = new track("It's Good to Be King", "5:11", "Wildflowers");
let tomPetty6 = new track("Only a Broken Heart", "4:29", "Wildflowers");
let tomPetty7 = new track("Honey Bee", "4:58", "Wildflowers");
let tomPetty8 = new track("Don't Fade on Me", "3:33", "Wildflowers");
let tomPetty9 = new track("Hard on Me", "3:47", "Wildflowers");
let tomPetty10 = new track("Cabin Down Below", "2:52", "Wildflowers");
let tomPetty11 = new track("To Find a Friend", "3:56", "Wildflowers");
let tomPetty12 = new track("A Higher Place", "3:57", "Wildflowers");
let tomPetty13 = new track("House in the Woods", "5:33", "Wildflowers");
let tomPetty14 = new track("Crawling Back to You", "5:06", "Wildflowers");
let tomPetty15 = new track("Wake Up Time", "5:20", "Wildflowers");
addTrack(tomPetty1);
addTrack(tomPetty2);
addTrack(tomPetty3);
addTrack(tomPetty4);
addTrack(tomPetty5);
addTrack(tomPetty6);
addTrack(tomPetty7);
addTrack(tomPetty8);
addTrack(tomPetty9);
addTrack(tomPetty10);
addTrack(tomPetty11);
addTrack(tomPetty12);
addTrack(tomPetty13);
addTrack(tomPetty14);
addTrack(tomPetty15);

let blackPink = new album(
  "The Album",
  "BlackPink",
  "The Album is the debut studio album by South Korean girl group Blackpink, released on October 2, 2020, by YG Entertainment and Interscope. Becoming available for pre-order on August 28, it was released nearly 18 months after Kill This Love. ",
  "2 October 2020",
  "K-pop",
  "images/album/blackpink.png",
  "4"
);

let blackPink1 = new track("How You Like That", "3:01", "BlackPink");
let blackPink2 = new track("Ice Cream", "2:56", "BlackPink");
let blackPink3 = new track("Pretty Savage", "3:19", "BlackPink");
let blackPink4 = new track("Bet You Wanna", "2:39", "BlackPink");
let blackPink5 = new track("Lovesick Girls", "3:13", "BlackPink");
let blackPink6 = new track("Crazy Over You", "2:42", "BlackPink");
let blackPink7 = new track("Love to Hate Me", "2:50", "BlackPink");
let blackPink8 = new track("You Never Know", "3:49", "BlackPink");

addAlbum(blackPink);
addTrack(blackPink1);
addTrack(blackPink2);
addTrack(blackPink3);
addTrack(blackPink4);
addTrack(blackPink5);
addTrack(blackPink6);
addTrack(blackPink7);
addTrack(blackPink8);
