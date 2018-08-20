import React from 'react';
import { shallow } from 'enzyme';
import Component from './Homepage';

describe( '(Component) Homepage', () => {
let wrapper, props;

beforeEach(() => {
props = {};
wrapper = shallow( <Component { ...props } />);
});

test( 'Displays a Homepage', () => {
expect( wrapper.find( '.Homepage' ).length ).toEqual( 1 );
});
});

