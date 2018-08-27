import React from 'react';
import Container from '../AppContainer';
import { shallow } from 'enzyme';
import Component from '../App';
import { Container } from '../AppContainer;'

describe( '(Container) App', () => {
let wrapper, props;

beforeEach(() => {
props = {};
wrapper = shallow( <AppContainer { ...props } />);
});

test( 'Displays a App component', () => {
expect( wrapper.find( Component ).length ).toEqual( 1 );
});
});

