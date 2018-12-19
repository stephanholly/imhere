import { combineReducers } from 'redux';

import nav from './nav';
import tabs from './tabs'



const rootReducer = combineReducers({
  nav,
  tabs,
});

export default rootReducer;
