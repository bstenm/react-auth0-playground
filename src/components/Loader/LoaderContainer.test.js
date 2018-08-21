import React from 'react';
import Container from '../LoaderContainer';
import { shallow } from 'enzyme';
import Component from '../Loader';
import { Container } from '../LoaderContainer;'

describe( '(Container) Loader', () => {
let wrapper, props;

beforeEach(() => {
props = {};
wrapper = shallow( <LoaderContainer { ...props } />);
});

test( 'Displays a Loader component', () => {
expect( wrapper.find( Component ).length ).toEqual( 1 );
});
});

