const Comment = require("./comment")

class Post extends React.Component {
    constructor(props) {
        super(props)
    }

    commentList(post) {
        return post.comments.map(Comment(comment))
    }

    render() {
        return <div>
            <h1>{this.props.post.title}</h1>
            <h2>{this.props.post.authorName}</h2>
            <h2>{this.props.post.body}</h2>
            <div>
                {this.commentList(this.props.post)}
            </div>
            <button onClick={this.refresh}>refresh</button>
        </div>
    }
}

