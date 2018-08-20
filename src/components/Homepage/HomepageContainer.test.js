import React from 'react';
import Container from '../HomepageContainer';
import { shallow } from 'enzyme';
import Component from '../Homepage';
import { Container } from '../HomepageContainer;'

describe( '(Container) Homepage', () => {
let wrapper, props;

beforeEach(() => {
props = {};
wrapper = shallow( <HomepageContainer { ...props } />);
});

test( 'Displays a Homepage component', () => {
expect( wrapper.find( Component ).length ).toEqual( 1 );
});
});

