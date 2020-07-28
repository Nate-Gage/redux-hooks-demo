export const postAnnouncement = (payload) => {
    return {
        type: 'POST_ANNOUNCEMENT',
        announcement: payload
    };
};