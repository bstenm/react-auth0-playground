import { init } from '@rematch/core';
import models from './redux';

const store = init({ models });

export default store;