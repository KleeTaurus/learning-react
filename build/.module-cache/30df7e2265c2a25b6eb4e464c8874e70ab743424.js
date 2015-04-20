var Comment = React.createClass({displayName: "Comment",
    render: function() {
        var rawMarkup = marked(this.props.children.toString(), { sanitize: true });
        return (
            React.createElement("div", {className: "comment"}, 
                React.createElement("h2", {className: "commentAuthor"}, 
                     this.props.author
                ), 
                 marked(this.props.children.toString()) 
            )
        );
    }
});
