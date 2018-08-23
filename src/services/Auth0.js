import auth0Js from 'auth0-js';
import { auth0Config } from '../config';

const auth0 = new auth0Js.WebAuth(auth0Config);

export const signIn = () => auth0.authorize();

export const getAccessToken = () => {
      const accessToken = localStorage.getItem('access_token');
      if (!accessToken) {
            throw new Error('No Access Token found');
      }
      return accessToken;
};

export const getProfile = (cb, cbError) => {
      const accessToken = getAccessToken();
      this.auth0.client.userInfo(accessToken, (err, profile) => {
            if (err) return cbError(err);
            else cb(profile);
      });
};

export const handleAuthentication = (cb, cbError) => {
      auth0.parseHash((err, authResult) => {
            if (err) return cbError(err);
            const {accessToken, idToken} = authResult || {};
            if (! accessToken || ! idToken) return;
            cb(authResult);
      });
};