import auth0Js from 'auth0-js';
import { auth0Config } from '../config';

export const auth0 = new auth0Js.WebAuth(auth0Config);
