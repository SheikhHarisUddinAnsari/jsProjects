function make_album(artist_name, albhum_title, no_of_tracks) {
    if (no_of_tracks === void 0) { no_of_tracks = 7; }
    var Album = {
        name: artist_name,
        title: albhum_title,
        tracks_no: no_of_tracks
    };
    console.log(Album);
}
make_album("Maher Zain", "Thank You Allah");
make_album("Sami Yousuf", "My Muslim Family");
make_album("Sami Ahmed", "Junoon", 15);
