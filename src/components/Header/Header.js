import './Header.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, Glyphicon } from 'react-bootstrap';

export const Component = () => (
      <div className="header" >
            <Navbar inverse collapseOnSelect>
                  <Navbar.Header>
                        <Navbar.Brand>
                              <Link to="/"><Glyphicon glyph="home"/></Link>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                  </Navbar.Header>
                  <Navbar.Collapse>
                        <Link to="users">Users</Link>
                  </Navbar.Collapse>
            </Navbar>
      </div>
);

export default Component;

