import React from 'react';
import Container from '../RequireAuthContainer';
import { shallow } from 'enzyme';
import Component from '../RequireAuth';
import { Container } from '../RequireAuthContainer;'

describe( '(Container) RequireAuth', () => {
let wrapper, props;

beforeEach(() => {
props = {};
wrapper = shallow( <RequireAuthContainer { ...props } />);
});

test( 'Displays a RequireAuth component', () => {
expect( wrapper.find( Component ).length ).toEqual( 1 );
});
});

