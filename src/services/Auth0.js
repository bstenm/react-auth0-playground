import auth0Js from 'auth0-js';
import { auth0Config } from '../config';

const auth0 = new auth0Js.WebAuth(auth0Config);

export const signIn = () => auth0.authorize();

export const handleAuthentication = (cb, cbError) => {
      auth0.parseHash((e, authResult) => {
            if (e) return cbError(e);
            const {accessToken, idToken} = authResult || {};
            if (! accessToken || ! idToken) return;
            cb(authResult);
      });
};