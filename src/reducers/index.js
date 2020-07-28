import { combineReducers } from 'redux';
import counterReducer from '../reducers/counter';
import announcementReducer from '../reducers/announce';

const allReducers = combineReducers({
    counter: counterReducer,
    announcement: announcementReducer
});

export default allReducers;