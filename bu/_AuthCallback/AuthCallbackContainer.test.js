import React from 'react';
import Container from '../AuthCallbackContainer';
import { shallow } from 'enzyme';
import Component from '../AuthCallback';
import { Container } from '../AuthCallbackContainer;'

describe( '(Container) AuthCallback', () => {
let wrapper, props;

beforeEach(() => {
props = {};
wrapper = shallow( <AuthCallbackContainer { ...props } />);
});

test( 'Displays a AuthCallback component', () => {
expect( wrapper.find( Component ).length ).toEqual( 1 );
});
});

