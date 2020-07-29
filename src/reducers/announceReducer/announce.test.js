import announcementReducer from './announce';

describe('Announcement Reducer', () => {

    test('Should return default state', () => {
        const newState = announcementReducer(undefined, {});
        expect(newState).toEqual("");
    });

    test('Should return state if receiving type', () => {
        const text = "this is my test announcement"
        const action = {
            type: 'POST_ANNOUNCEMENT',
            text
        };
        const state = announcementReducer(undefined, action);
        expect(state).toEqual(text);
    });
});