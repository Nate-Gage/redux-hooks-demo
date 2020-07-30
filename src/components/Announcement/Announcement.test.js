import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../utils/index';
import Announcement from './Announcement';

const setUp = (props = {}) => {
    const component = shallow(<Announcement {...props} />);
    return component;
};

describe('Announcement Component', () => {
    let component;
    //Run before each test in the describe
    beforeEach(() => {
        component = setUp();
    });

    test('It should render without errors', () => {
        const wrapper = findByTestAttr(component, 'announceComponent');
        expect(wrapper.length).toBe(1);
    });
});