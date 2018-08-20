import './Header.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, Glyphicon } from 'react-bootstrap';

export const Component = ({ authenticated }) => (
      <div className="header" >
            <Navbar inverse collapseOnSelect>
                  <Navbar.Header>
                        <Navbar.Brand>
                              <Link to="/"><Glyphicon glyph="home"/></Link>
                        </Navbar.Brand>
                        <div style={{color: "white"}}>{ authenticated ? 'Authenticated' : 'Not authenticated' }</div>
                        <Navbar.Toggle />
                  </Navbar.Header>
                  <Navbar.Collapse>
                        { authenticated && (
                              <Link to="profile">Profile</Link>
                        )}
                        <Link to="users">Users</Link>
                  </Navbar.Collapse>
            </Navbar>
      </div>
);

export default Component;

