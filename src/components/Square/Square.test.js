import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../utils/index';
import Squares from './Squares';

const setUp = (props = {}) => {
    const component = shallow(<Squares {...props} />);
    return component;
};

describe('Squares Component', () => {

    let component;
    beforeEach(() => {
        component = setUp();
    });

    test('Should render without errors', () => {
        const wrapper = findByTestAttr(component, 'squaresComponent');
        expect(wrapper.length).toBe(1);
    });

    test('Should change bg color', () => {
        
    })
});