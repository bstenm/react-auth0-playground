import React from 'react';
import Container from '../PrimaryLayoutContainer';
import { shallow } from 'enzyme';
import Component from '../PrimaryLayout';
import { Container } from '../PrimaryLayoutContainer;'

describe( '(Container) PrimaryLayout', () => {
let wrapper, props;

beforeEach(() => {
props = {};
wrapper = shallow( <PrimaryLayoutContainer { ...props } />);
});

test( 'Displays a PrimaryLayout component', () => {
expect( wrapper.find( Component ).length ).toEqual( 1 );
});
});

