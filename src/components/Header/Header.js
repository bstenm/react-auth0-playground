import './Header.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, NavItem, Glyphicon } from 'react-bootstrap';

export const Component = ({ authenticated }) => (
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
                        </Nav>
                  </Navbar.Collapse>
            </Navbar>
      </div>
);

export default Component;

