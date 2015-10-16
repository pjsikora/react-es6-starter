var $ = require('jquery'),
    React = require('react'),
    ReactDOM = require('react-dom');

class ReactModule extends React.Component {
  tick() {
    console.log('CLicked element');
    console.log(this);
  } 

  render() {
    var postNodes = this.props.data.map(function (post) {
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

export default ReactModule;