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



const samplePost = {
    authorId: 1001,
    authorName: "Albert",
    title: "test title",
    body: "test body",
    comments: [sampleComment, sampleComment, sampleComment, sampleComment]
}


class Post extends React.Component {
    constructor(props) {
        super(props)
        this.post = samplePost
        this.commentList = this.post.comments.map((comment) => 
            
            <div key={comment.toString()}>
                {comment.body}
                {this.replyList(comment)}
            </div>
        )

    }

    replyList (comment) {
        return comment.replies.map((reply) => <li key={reply.toString}>{reply.body}</li>)
    } 
    
    render () {
        return <div>
            <h1>{this.post.title}</h1>
            <h2>{this.post.authorName}</h2>
            <h2>{this.post.body}</h2>
            <div>
                {this.commentList}
            </div>
        </div>

    }
}

ReactDOM.render(<Post />, document.querySelector("#post"))