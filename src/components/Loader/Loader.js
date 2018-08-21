import './Loader.css';
import React from 'react';
import PropTypes from 'prop-types';

export const Component = ({ loading }) => (
      <div className="Loader" >
            <div style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  top: "50px",
                  left: "0px",
                  zIndex: "1000",
                  background: "white",
                  opacity: "0.8"
            }}></div>
            <div style={{
                  position: "absolute",
                  textAlign: "center",
                  zIndex: "2000",
                  width: "100%",
                  top: "50%"
            }}>
                  <span
                        title="Loading"
                        style={{ fontSize: "25px", color: "#757575" }}
                        className="glyphicon glyphicon-refresh icon-refresh-animate"
                        aria-hidden="true"></span>
            </div>
      </div>
);

Component.propTypes = { };

export default Component;

