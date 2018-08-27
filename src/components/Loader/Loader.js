import './Loader.css';
import React from 'react';
import PropTypes from 'prop-types';
/*
<div class="lds-css ng-scope">
<div class="lds-blocks" style="100%;height:100%"><div style="left:57px;top:57px;animation-delay:0s"></div><div style="left:103px;top:57px;animation-delay:0.425s"></div><div style="left:57px;top:103px;animation-delay:1.275s"></div><div style="left:103px;top:103px;animation-delay:0.85s"></div></div>
<style type="text/css">@keyframes lds-blocks {
  0% {
    background: #757575;
  }
  25% {
    background: #757575;
  }
  25.25% {
    background: #bbbbbb;
  }
  100% {
    background: #bbbbbb;
  }
}
@-webkit-keyframes lds-blocks {
  0% {
    background: #757575;
  }
  25% {
    background: #757575;
  }
  25.25% {
    background: #bbbbbb;
  }
  100% {
    background: #bbbbbb;
  }
}
.lds-blocks {
  position: relative;
}
.lds-blocks div {
  position: absolute;
  width: 40px;
  height: 40px;
  background: #bbbbbb;
  -webkit-animation: lds-blocks 1.7s linear infinite;
  animation: lds-blocks 1.7s linear infinite;
}
.lds-blocks {
  width: 58px !important;
  height: 58px !important;
  -webkit-transform: translate(-29px, -29px) scale(0.29) translate(29px, 29px);
  transform: translate(-29px, -29px) scale(0.29) translate(29px, 29px);
}
</style></div>
*/

export const Component = () => (
      <div className="Loader" >
            <div style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  top: "0px",
                  left: "0px",
                  zIndex: "1000",
                  background: "white",
                  opacity: "0.9"
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
                        style={{ fontSize: "15px", color: "#aaaaaa" }}
                        className="glyphicon glyphicon-refresh icon-refresh-animate"
                        aria-hidden="true"></span>
            </div>
      </div>
);

Component.propTypes = { };

export default Component;

