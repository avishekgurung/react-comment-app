import React, { Component } from 'react';
import CommentListDetail from './comment_list_detail'

class CommentList extends Component {
	constructor(props) {
		super(props);
		this.state = { selectedId : ''};
	}

	highLightBox = (id) => {
		var commentBox;
		var classList;
		console.log(this.state);
		if(this.state.selectedId) {
			commentBox = document.getElementById(this.state.selectedId);
			classList = commentBox.classList;
			classList.remove('box-highlight');
		}
		commentBox = document.getElementById(id);
		classList = commentBox.classList;
		classList.add('box-highlight');
		this.setState({selectedId : id});

	}

	render = () => {
		var that = this;
		var commentList = this.props.comments.map (function(comment, i) {
			return <CommentListDetail key={i} comment = {comment} highLightBox = {that.highLightBox}/>
		})

		return (
			<div className = "comment-list"> {commentList} </div>
		);
	}
}

/*const CommentList = ({comments}) => {
	var prevId = '';
	if(!comments.length) {
		return <div></div>
	}

	var commentList = comments.map (function(comment, i) {
		return <CommentListDetail key={i} comment = {comment} />
	})

	return (
		<div className = "comment-list"> {commentList} </div>
	);
}*/

export default CommentList;