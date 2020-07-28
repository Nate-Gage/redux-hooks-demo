import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postAnnouncement } from '../actions/announceActions';

const Announcement = () => {
    const dispatch = useDispatch();
    const announcement = useSelector(state => state.announcement);

    return (
        <div>
            <p>Post your announcement</p>
            <form onSubmit={(e) => {
                e.preventDefault();

                dispatch(postAnnouncement(e.target.elements.announceInput.value))
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

export default Announcement;
