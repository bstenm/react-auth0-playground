import React from 'react';
import { shallow } from 'enzyme';
import Component from './App';

describe( '(Component) App', () => {
let wrapper, props;

beforeEach(() => {
props = {};
wrapper = shallow( <Component { ...props } />);
});

test( 'Displays a App', () => {
expect( wrapper.find( '.App' ).length ).toEqual( 1 );
});
});

