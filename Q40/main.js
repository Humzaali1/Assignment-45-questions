function make_album(artist, title, numTracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (numTracks) {
        album.numTracks = numTracks;
    }
    return album;
}
var album1 = make_album('Beatles', 'Abbey Road');
console.log(album1);
var album2 = make_album('Pink Floyd', 'Dark Side of the Moon');
console.log(album2);
var album3 = make_album('Mozart', 'Symphony No. 40', 36);
console.log(album3);
