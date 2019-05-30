import { combineReducers } from 'redux';

const initialState = [
  {
    title: 'No Scrubs',
    duration: '4:05'
  },
  {
    title: 'asoidjasdjasd',
    duration: '2:05'
  },
  {
    title: 'All star',
    duration: '4:25'
  },
  {
    title: 'I want it',
    duration: '3:00'
  }
];

const songsReducer = (state = initialState, action) => {
  if (action.type === 'ADD_SONG') {
    return [...state, action.payload];
  } else if (action.type === 'REMOVE_SONG') {
    return state.filter(song => song !== action.payload);
  }
  return state;
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
