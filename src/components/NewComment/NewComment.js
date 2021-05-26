import './NewComment.css';
import React,{useContext} from 'react';
import {CommentsContext} from '../../context/CommentsProvider';
import {NavLink} from 'react-router-dom';

const NewComment = () => {

    const {onCommentSubmit,show} = useContext(CommentsContext);

    return (
        <div className="divComment">
            <h1 className="title">Novo Comentário</h1>
            <form onSubmit={onCommentSubmit}>
                <p></p>
                <textarea className="titleInput" type="text" id="name" placeholder="Digite um título até 144 caracteres" maxLength="144" required="true"/>
                <p></p>
                <textarea className="NewComment" type="text" id="body" placeholder="Digite um comentário até 500 caracteres" maxLength="500" required="true"/>
                <p></p>
                <div className="divButton">
                    <NavLink to="/" exact><button className="button">Voltar</button></NavLink>
                    <input className="button" type="submit" value="Publicar"/>
                </div>
            </form>
            {show ?
                <p>Comentário Publicado!</p>
                :null
            }
        </div>
    );
}

export default NewComment;