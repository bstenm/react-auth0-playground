import React from 'react';
import { shallow } from 'enzyme';
import Component from './About';

describe( '(Component) About', () => {
let wrapper, props;

beforeEach(() => {
props = {};
wrapper = shallow( <Component { ...props } />);
});

test( 'Displays a About', () => {
expect( wrapper.find( '.About' ).length ).toEqual( 1 );
});
});

