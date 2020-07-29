import { combineReducers } from 'redux';
import counterReducer from '../reducers/counterReducer/counter';
import announcementReducer from '../reducers/announceReducer/announce';

const allReducers = combineReducers({
    counter: counterReducer,
    announcement: announcementReducer
});

export default allReducers;