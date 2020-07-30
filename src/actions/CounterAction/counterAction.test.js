import { increment, decrement } from '../CounterAction/counterActions';

describe('Counter Action', () => {

    test('Should increment state', () => {
        const input = 2;
        const action = increment(input);
        expect(action).toEqual({
            type: 'INCREMENT',
            payload: input
        });
    });

    test('Should decrement state', () => {
        const input = 2;
        const action = decrement(input);
        expect(action).toEqual({
            type: 'DECREMENT',
            payload: input
        });
    });
});

