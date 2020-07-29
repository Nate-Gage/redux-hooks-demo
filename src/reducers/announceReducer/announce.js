const announcementReducer = (state='', action) => {
    switch (action.type) {
        case 'POST_ANNOUNCEMENT':
            return action.text;
        default:
            return state;
    }
};

export default announcementReducer;