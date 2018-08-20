import React from 'react';
import { shallow } from 'enzyme';
import Component from './UsersArea';

describe( '(Component) UsersArea', () => {
let wrapper, props;

beforeEach(() => {
props = {};
wrapper = shallow( <Component { ...props } />);
});

test( 'Displays a UsersArea', () => {
expect( wrapper.find( '.UsersArea' ).length ).toEqual( 1 );
});
});

