function make_album(
  artist_name: string,
  albhum_title: string,
  no_of_tracks: number = 7
) {
  let Album = {
    name: artist_name,
    title: albhum_title,
    tracks_no: no_of_tracks,
  };
  console.log(Album);
}
make_album("Maher Zain", "Thank You Allah");
make_album("Sami Yousuf", "My Muslim Family");
make_album("Sami Ahmed", "Junoon", 15);
