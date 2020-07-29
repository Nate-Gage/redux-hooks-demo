import counterReducer from '../counterReducer/counter';

describe('Counter Reducer', () => {

    test('Should return default state', () => {
        const newState = counterReducer(undefined, {});
        expect(newState).toEqual(0);
    });

    test('Should INCREMENT state if receiving type', () => {
        const input = 3;
        const action = {
            type: 'INCREMENT',
            payload: input
        };
        const state = counterReducer(5, action);
        expect(state).toEqual(8);
    });

    test('Should DECREMENT state if receiving type', () => {
        const input = 3;
        const action = {
            type: 'DECREMENT',
            payload: input
        };
        const state = counterReducer(5, action);
        expect(state).toEqual(2);
    });
})
