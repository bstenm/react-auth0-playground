import './Header.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { signIn } from '../../services/Auth0';
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, NavItem, Glyphicon } from 'react-bootstrap';

export const Component = ({ authenticated, logout }) => (
      <div className="header" >
            <Navbar inverse collapseOnSelect>
                  <Navbar.Header>
                        <Navbar.Brand>
                              <Link to="/">
                                    <Glyphicon glyph="home"/>
                              </Link>
                        </Navbar.Brand>
                        <div style={{color: "white", float:"left", padding: "17px 0 0 20px"}}>
                              { authenticated ? 'Authenticated' : 'Not authenticated' }
                        </div>
                        <Navbar.Toggle />
                  </Navbar.Header>
                  <Navbar.Collapse>
                        <Nav pullRight>
                              { authenticated && (
                              <LinkContainer to="/users/1">
                                    <NavItem>Your Profile</NavItem>
                              </LinkContainer>
                              )}
                              <LinkContainer to="/users">
                                    <NavItem>Users</NavItem>
                              </LinkContainer>
                              <LinkContainer to="/about">
                                    <NavItem>About</NavItem>
                              </LinkContainer>
                              { authenticated ? (
                              <NavItem onClick={logout}>Logout</NavItem>) : (
                              <NavItem onClick={signIn}>Login</NavItem>
                              )}
                        </Nav>
                  </Navbar.Collapse>
            </Navbar>
      </div>
);

export default Component;

