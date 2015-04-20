var CommentList = React.createClass({displayName: "CommentList",
    render: function() {
        return (
            React.createElement("div", {className: "commentList"}, 
                React.createElement(Comment, {author: "Pete Hunt"}, "This is one comment"), 
                React.createElement(Comment, {author: "Jordan Walke"}, React.createElement("p", null, "This is *another* comment"))
            )
        );
    }
});
React.render(
    React.createElement(CommentList, null),
    document.getElementById('content')
);
