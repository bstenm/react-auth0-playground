import React from 'react';
import { connect } from 'react-redux';
import Component from './Homepage';

export class Container extends React.Component {

      render() {
            return (
                  <Component { ...this.props } />
            );
      }
};

export default connect(
      ({ authenticated }) => ({ authenticated }),
      ({ authenticated: { setSession }}) => ({ setSession })
)( Container );

