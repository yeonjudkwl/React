// 경로 : src/store/index.js

import input from './modules/input';
import data from './modules/data';
import { combineReducers } from 'redux';

export default combineReducers({
  input, data
})