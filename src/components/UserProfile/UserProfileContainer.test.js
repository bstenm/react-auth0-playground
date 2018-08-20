import React from 'react';
import Container from '../UserProfileContainer';
import { shallow } from 'enzyme';
import Component from '../UserProfile';
import { Container } from '../UserProfileContainer;'

describe( '(Container) UserProfile', () => {
let wrapper, props;

beforeEach(() => {
props = {};
wrapper = shallow( <UserProfileContainer { ...props } />);
});

test( 'Displays a UserProfile component', () => {
expect( wrapper.find( Component ).length ).toEqual( 1 );
});
});

