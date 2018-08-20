import React from 'react';
import { shallow } from 'enzyme';
import Component from './UserProfile';

describe( '(Component) UserProfile', () => {
let wrapper, props;

beforeEach(() => {
props = {};
wrapper = shallow( <Component { ...props } />);
});

test( 'Displays a UserProfile', () => {
expect( wrapper.find( '.UserProfile' ).length ).toEqual( 1 );
});
});

