import React from 'react';
import { shallow } from 'enzyme';
import Component from './PrimaryLayout';

describe( '(Component) PrimaryLayout', () => {
let wrapper, props;

beforeEach(() => {
props = {};
wrapper = shallow( <Component { ...props } />);
});

test( 'Displays a PrimaryLayout', () => {
expect( wrapper.find( '.PrimaryLayout' ).length ).toEqual( 1 );
});
});

