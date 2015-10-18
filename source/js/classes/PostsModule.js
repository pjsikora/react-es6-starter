var $ = require('jquery'),
    React = require('react'),
    ReactDOM = require('react-dom');

class PostsModule extends React.Component {
  tick() {
    console.log('CLicked element');
    console.log(this);
  }

  getFeed() {
    var promise = new Promise(function(resolve, reject) {

    });
  }

  listItemClick() {
    console.log('Clicked list element');
  }

  render() {
    var postNodes = this.props.data.posts.map(function (post) {
      return (
        <div>
          <a href={post.url}>{post.title}</a>
          <p class="excerpt">
          {post.excerpt}
          </p>
        </div>
      );
    });

    return (
        <div onClick={this.tick.bind(this)}>
            {postNodes}
        </div>
        );
  }
}

//

export default PostsModule;
