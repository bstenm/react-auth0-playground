import React from 'react';
import { shallow } from 'enzyme';
import Component from './Users';

describe( '(Component) Users', () => {
let wrapper, props;

beforeEach(() => {
props = {};
wrapper = shallow( <Component { ...props } />);
});

test( 'Displays a Users', () => {
expect( wrapper.find( '.Users' ).length ).toEqual( 1 );
});
});

