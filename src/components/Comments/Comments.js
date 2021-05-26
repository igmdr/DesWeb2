import React,{useContext} from 'react';
import {Link} from 'react-router-dom';
import Comment from '../Comment/Comment.js';
import {CommentsContext} from '../../context/CommentsProvider';

const Comments = () => {
    
    const {comments} = useContext(CommentsContext);

    return (
        <div>
            {comments.map((comment,index) => {
                //console.log(comment.id);
                return(
                    <Comment 
                        name={comment.name}>
                        <br/>
                        <Link className="details" to={"/" + comment.id}>
                            Mais detalhes...
                        </Link>
                    </Comment>
                );
            })}
        </div>
    );
};

export default Comments;