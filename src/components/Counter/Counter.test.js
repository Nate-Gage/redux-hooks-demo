import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../utils/index';
import Counter from '../Counter/Counter';

const setUp = (props = {}) => {
    const component = shallow(<Counter {...props} />);
    return component;
};

describe('Counter Component', () => {

    let component;
        //Run before each test in the describe
        beforeEach(() => {
            component = setUp();
        });

    test('It should render without errors', () => {
        const wrapper = findByTestAttr(component, 'counterComponent');
        expect(wrapper.length).toBe(1);
    });
});