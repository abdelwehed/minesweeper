import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Minesweeper } from '../index';

configure({ adapter: new Adapter() });

describe('Minesweeper', () => {
  it('should render minesweeper', () => {
    const wrapper = shallow(<Minesweeper />);
    expect(wrapper).toMatchSnapshot();
  })
})