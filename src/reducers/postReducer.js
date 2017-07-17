import * as actionTypes from '../actions/actionTypes';

const initialState = {
  posts: []
}

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SAVE_POST:
      return {
        ...state,
        posts: state.posts.concat(action.payload.posts)
      }

    default:
      return state;
  }
};

export default postReducer;
