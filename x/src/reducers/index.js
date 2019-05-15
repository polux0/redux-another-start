// list of reducers that change state ( in the store ) by listening to type of actions creators; 
import {combineReducers} from 'redux';

const songsReducer = () => {
    return [
        {title: 'No Scrubs', duration: '1:05'},
        {title: 'Macarena', duration: '1:05'},
        {title: 'All Stars', duration: '1:05'},
        {title: 'I want it that way', duration: '1:05'},
        {title: 'Ghetto', duration: '1:05'}
    ];
}
const selectedSongReducer = (selectedSong = null, action) => {

    if(action.type === 'SONG_SELECTED') return action.payload;
    else return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})