import React from 'react';
import Container from '../PrimaryLayoutContainer';
import { shallow } from 'enzyme';
import Component from '../CoreLayout';
import { Container } from '../PrimaryLayoutContainer;'

describe( '(Container) CoreLayout', () => {
let wrapper, props;

beforeEach(() => {
props = {};
wrapper = shallow( <PrimaryLayoutContainer { ...props } />);
});

test( 'Displays a CoreLayout component', () => {
expect( wrapper.find( Component ).length ).toEqual( 1 );
});
});

