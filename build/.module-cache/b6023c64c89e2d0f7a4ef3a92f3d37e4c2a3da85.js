var CommentBox = React.createClass({displayName: "CommentBox",
    render: function() {
        return (
            React.createElement("div", {className: "commentBox"}, 
                React.createElement("h1", null, "Comments"), 
                React.createElement(CommentList, null)
            )
        );
    }
});
React.render(
    React.createElement(CommentBox, null),
    document.getElementById('content')
);
