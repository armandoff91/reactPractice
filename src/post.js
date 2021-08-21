const sampleReply = {
    authorId : 1003,
    authorName: "Joe",
    body: "sample reply"
}




const sampleComment = {
    authorId: 1002,
    authorName: "Jane",
    body: "sample comment",
    replies: [sampleReply, sampleReply, sampleReply]
}

const sampleComment2 = {
    authorId: 1002,
    authorName: "John",
    body: "sample comment 2",
    replies: [sampleReply, sampleReply, sampleReply]
}


const samplePost = {
    authorId: 1001,
    authorName: "Albert",
    title: "test title",
    body: "test body",
    comments: [sampleComment, sampleComment, sampleComment, sampleComment]
}

const updatedPost = {
    authorId: 1001,
    authorName: "Albert2",
    title: "test title2",
    body: "test body2",
    comments: [sampleComment2, sampleComment2, sampleComment2, sampleComment2]
}

class Post extends React.Component {
    constructor(props) {
        super(props)
        this.state = {post: samplePost}
        this.refresh = this.refresh.bind(this) // if not binded the scope of refresh will be window
    }

    commentList(post) {return post.comments.map((comment) => 
            
            <div key={comment.toString()}>
                {comment.body}
                {this.replyList(comment)}
            </div>

    )}

    replyList (comment) {
        return comment.replies.map((reply) => <li key={reply.toString}>{reply.body}</li>)
    }

    refresh() {
        console.log(this)
        this.setState({
            post: updatedPost
        })
    }
    
    render () {
        return <div>
            <h1>{this.state.post.title}</h1>
            <h2>{this.state.post.authorName}</h2>
            <h2>{this.state.post.body}</h2>
            <div>
                {this.commentList(this.state.post)}
            </div>
            <button onClick={this.refresh}>refresh</button>
        </div>

    }
}

ReactDOM.render(<Post/>, document.querySelector("#post"))