import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
	return (

		<div className="ui container comments">

			<ApprovalCard>
				<h4>Warning!</h4>
				Are you sure you want to do this?
			</ApprovalCard>

			<ApprovalCard>
				<CommentDetail 
					author="Sam"
					timeAgo="Today at 4:45PM"
					text="WOW!" 
					avatar={faker.image.image()}
				/>
			</ApprovalCard>

			<ApprovalCard>
				<CommentDetail 
					author="Alex" 
					timeAgo="Today at 2:00PM" 
					text="That's pretty cool"
					avatar={faker.image.image()}
				/>
			</ApprovalCard>

			<ApprovalCard>
				<CommentDetail 
					author="Jane" 
					timeAgo="Yesterday at 3:00AM" 
					text="I'm horny" 
					avatar={faker.image.image()}
				/>
			</ApprovalCard>

		</div> 


	);
};

ReactDOM.render(<App/>, document.querySelector('#root'));


