// action creator that returns an *action*
export const selectSong = (Song) => {
    //action
    return {
        type:'SONG_SELECTED',
        payload: Song
    };
}