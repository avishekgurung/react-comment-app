import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AddComment from './components/add_comment';
import CommentList from './components/comment_list';
import Utils from './components/utils';


class App extends Component {
	constructor (props) {
		super(props);
		this.state = {
			comments : [
				{ 	
					id : '2',
					name : 'Ankur Garg',
					text : 'He distorted the facts of bajirao, was peacefully protested & condemned by marathi knowledgeable actor- nana patekar, what happened , nothing & film was a hit, who gives any1 liberty to play with the history, & some might well say to file a case, the first hearing will come after the film is released.',
					date : new Utils().getFormattedDate()
				},
				{ 	
					id : '3',
					name : 'Nishrin Pundit',
					text : "If u don't like Padmavati, don't watch it. But using violence as a means is just behaving like terrorists to prove their point. How can u decide what's going to be portrayed without even watching the movie? Why nobody protested against the TV soap operas producing historic shows, modifying the entries storyline? If u can sustain that or maybe ignore that, why can't this be left the way it is?",
					date : new Utils().getFormattedDate()
				}
			]
		}
	}

	addComment = (comment) => {
		var comments = this.state.comments;
		comments.push(comment);
		this.setState({comments:comments});
	}

	render = () => {
		return (
			<div>
				<div className = "head">
					<h2>React: Comments implementation</h2>
				</div>
				<AddComment addComment = {this.addComment}/>
				<CommentList comments = {this.state.comments} />
			</div>
		);
	}

}


ReactDOM.render(<App />, document.querySelector('.container'));

