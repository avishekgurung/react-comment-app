import React, { Component } from 'react';
import Comment from './create_comment';

class AddComment extends Component {
	constructor ({props}) {
		super (props);
		this.state = {
			name : { value:'', invalid : false},
			text : { value : '', invalid : false}
		}
	}

	onChangeEvent = (event) => {
		var value = event.target.value;
		var key = event.target.getAttribute("name");
		var invalid = value ? false : true;
		var object = {};
		object [ key ] = { value : value, invalid : invalid };
		this.setState(object);
	}

	submit = (event) => {
		if (!this.state.name.value || !this.state.name.value) {
			if (!this.state.name.value) {
				this.setState({name : {value:'', invalid : true}});
			}
			if(!this.state.text.value) {
				this.setState({text : { value : '', invalid : true}});
			}
			return;
		}
		var comment = new Comment(this.state.name.value, this.state.text.value).getComment();
		this.props.addComment(comment);
		this.reset();
	}

	reset = () => {
		this.setState({
			name : { value:'', invalid : false},
			text : { value : '', invalid : false}
		})

	}
	
	
	render = () => {
		return (
			<div className = "add-comment">
				<textarea 
					name = "text" 
					className = {`form-control ${this.state.text.invalid ? 'invalid-entry ' : '' }`} 
					rows="5" 
					onChange = {this.onChangeEvent} 
					value = {this.state.text.value}
					placeholder = "Enter comment"
					>
				</textarea>
				<div className = "row">
					<div className = "col-sm-9">
						<input 
							name = "name" 
							className = {`form-control ${this.state.name.invalid ? 'invalid-entry' : '' }`} 
							onChange = {this.onChangeEvent} 
							value = {this.state.name.value}
							placeholder = "Enter name"
						/> 
					</div>
					<div className = "col-sm-2">
						<button type = "submit" className = "btn btn-danger" onClick = {this.submit}> Submit </button>
					</div>
				</div>
			</div>
		);
	}
}




export default AddComment;