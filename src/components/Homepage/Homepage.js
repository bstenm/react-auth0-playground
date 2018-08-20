import './Homepage.css';
import React from 'react';
import PropTypes from 'prop-types';

export const Component = ({authenticated}) => (
      <div className="Homepage" >
            Homepage - { authenticated ? 'Authenticated' : 'Not authenticated' }
      </div>
);

Component.propTypes = { };

export default Component;

