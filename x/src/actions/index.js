// action creator that returns an *action*
export const selectSong = (Song) => {
    return {
        type:'SONG_SELECTED',
        payload: Song
    };
}