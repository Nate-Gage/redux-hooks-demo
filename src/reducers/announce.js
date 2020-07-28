const announcementReducer = (state='', action) => {
    switch (action.type) {
        case 'POST ANNOUNCEMENT':
            return [
                ...state,
                action.announcement
            ]
        default:
            return state;
    }
};

export default announcementReducer;