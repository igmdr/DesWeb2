import React,{useContext} from 'react';
import {CommentsContext} from '../../context/CommentsProvider';
import {useParams} from 'react-router-dom';
import {NavLink} from 'react-router-dom';

const CommentUpdate = () => {

    const {comments,onCommentUpdate,show} = useContext(CommentsContext);
    const {id} = useParams();
    //console.log(comments[id]);

    return(
        <div className="divComment">
            <h1 className="title">Atualizar Commentário</h1>
            <form id={id} onSubmit={onCommentUpdate}>
                <p></p>
                <textarea className="titleInput" type="text" id="name" defaultValue={comments[id].name} maxLength="144"/>
                <p></p>
                <textarea className="NewComment" type="text" id="body" defaultValue={comments[id].body} maxLength="500"/>
                <p></p>
                <div className="divButton">
                    <NavLink to="/" exact><button className="button">Voltar</button></NavLink>
                    <input className="button" type="submit" value="Atualizar"/>
                </div>
            </form>
            {show ?
                <p>Comentário Atualizado!</p>
                :null
            }
        </div>
    );

}

export default CommentUpdate;