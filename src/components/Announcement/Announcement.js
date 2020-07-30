import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postAnnouncement } from '../../actions/AnnounceAction/announceActions';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from '../../reducers/index';

const AnnouncementWrapper = () => {
    const store = createStore(allReducers);

    return (
        <Provider store={store}>
            <Announcement data-test='announceComponent'/> 
        </Provider>
    );
};

const Announcement = () => {
    const dispatch = useDispatch();
    const announcement = useSelector(state => state.announcement);

    return (
        <div>
            <p>Post your announcement</p>
            <form onSubmit={(e) => {
                e.preventDefault();
                dispatch(postAnnouncement(JSON.stringify(e.target.elements.announceInput.value)))
            }}>
                <input
                    type="text"
                    name="announceInput"
                    placeholder="text here"
                />
                <button>Submit</button>
            </form>
            <h2>{announcement}</h2>
        </div>
    );
};

export default AnnouncementWrapper;
