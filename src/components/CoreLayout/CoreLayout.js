import './CoreLayout.css';
import React from 'react';
import About from '../About';
import Loader from '../Loader';
import Header from '../Header';
import Dimmer from '../Dimmer';
import PropTypes from 'prop-types';
import Homepage from '../Homepage';
import RequireAuth from '../RequireAuth';
import { Route, Switch, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
const RouteWithLoader = ({path, Component}) => (
      <Route path={path} render={() => (
            <Wrapped>
                  <Component />
            </Wrapped>
      )} />
)

class WithLoader extends React.Component {

      componentWillMount () {
            this.props.start();
      }

      componentDidMount () {
            this.props.stop();
      }

      render () {
            return this.props.children;
      }
};

const Wrapped = connect(null, ({ loading: { start, stop }}) => ({ start, stop }))(WithLoader);

export const Component = ({ loading }) => (
      <div className="CoreLayout">
            <Header />
            { loading && (
                  <div>
                        <Dimmer />
                        <Loader />
                  </div>
            )}
            <main>
                  <Switch>
                        <Route path="/" exact component={Homepage} />
                        <RouteWithLoader path="/about" Component={About} />
                        <Route path="/" component={RequireAuth} />
                        <Redirect to="/" />
                  </Switch>
            </main>
      </div>
);;

Component.propTypes = {
      loading: PropTypes.bool
};

Component.defaultProps = {
      loading: false
};


export default Component;

