import { postAnnouncement } from '../AnnounceAction/announceActions';

describe('Post Announcement Action', () => {

    test('Should post announcement', () => {
        const text = 'hello';
        const action = postAnnouncement(text);
        expect(action).toEqual({
            type: 'POST_ANNOUNCEMENT',
            text
        });
    });
});