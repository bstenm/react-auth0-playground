import React from 'react';
import { shallow } from 'enzyme';
import Component from './CoreLayout';

describe( '(Component) CoreLayout', () => {
let wrapper, props;

beforeEach(() => {
props = {};
wrapper = shallow( <Component { ...props } />);
});

test( 'Displays a CoreLayout', () => {
expect( wrapper.find( '.CoreLayout' ).length ).toEqual( 1 );
});
});

