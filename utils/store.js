import { createStore } from 'redux';
import reducer from '../src/reducers/videos';

const store = createStore(reducer, {});

export default store;
