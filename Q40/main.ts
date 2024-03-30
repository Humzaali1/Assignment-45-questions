function make_album(artist: string, title: string, numTracks?: number): any {
    const album: any = {
      artist: artist,
      title: title
    };
  
    if (numTracks) {
      album.numTracks = numTracks;
    }
  
    return album;
  }
  
  const album1 = make_album('Beatles', 'Abbey Road');
  console.log(album1);
  
  const album2 = make_album('Pink Floyd', 'Dark Side of the Moon');
  console.log(album2);
  
  const album3 = make_album('Mozart', 'Symphony No. 40', 36);
  console.log(album3);
  