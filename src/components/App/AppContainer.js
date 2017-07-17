import { connect } from 'react-redux';

import App from './App.js';
import { savePost } from '../../actions/postAction';

const mapStateToProps = state => ({
  posts: state.post.posts
});

export default connect(
  mapStateToProps,
  {
    savePost: (posts) => savePost(posts)
  }
)(App);


