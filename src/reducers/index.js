import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

import post from './postReducer';

const rootReducer = combineReducers({
  post,
  form: reduxFormReducer
});

export default rootReducer;
