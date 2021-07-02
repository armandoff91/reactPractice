var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var sampleReply = {
    authorId: 1003,
    authorName: "Joe",
    body: "sample reply"
};

var sampleComment = {
    authorId: 1002,
    authorName: "Jane",
    body: "sample comment",
    replies: [sampleReply, sampleReply, sampleReply]
};

var samplePost = {
    authorId: 1001,
    authorName: "Albert",
    title: "test title",
    body: "test body",
    comments: [sampleComment, sampleComment, sampleComment, sampleComment]
};

var Post = function (_React$Component) {
    _inherits(Post, _React$Component);

    function Post(props) {
        _classCallCheck(this, Post);

        var _this = _possibleConstructorReturn(this, (Post.__proto__ || Object.getPrototypeOf(Post)).call(this, props));

        _this.post = samplePost;
        _this.commentList = _this.post.comments.map(function (comment) {
            return React.createElement(
                "div",
                { key: comment.toString() },
                comment.body,
                _this.replyList(comment)
            );
        });

        return _this;
    }

    _createClass(Post, [{
        key: "replyList",
        value: function replyList(comment) {
            return comment.replies.map(function (reply) {
                return React.createElement(
                    "li",
                    { key: reply.toString },
                    reply.body
                );
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    this.post.title
                ),
                React.createElement(
                    "h2",
                    null,
                    this.post.authorName
                ),
                React.createElement(
                    "h2",
                    null,
                    this.post.body
                ),
                React.createElement(
                    "div",
                    null,
                    this.commentList
                )
            );
        }
    }]);

    return Post;
}(React.Component);

ReactDOM.render(React.createElement(Post, null), document.querySelector("#post"));