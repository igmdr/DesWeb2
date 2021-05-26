import React from 'react';

const Comment = (props) => {
	return (
		<div className="divComment">
			<h1 className="title"><strong>Título:</strong> {props.name}</h1>
			<p>{props.children}</p>
		</div>
	)
}

export default Comment;