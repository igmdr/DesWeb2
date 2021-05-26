import React,{useEffect,useContext} from 'react';
import {useParams} from 'react-router-dom';
import {CommentsContext} from '../../context/CommentsProvider';
import {NavLink} from 'react-router-dom';

const FullComment = () => {
    const {comments} = useContext(CommentsContext);
    //console.log(comments);
    const {id} = useParams();
    //console.log("Params: " + id);
    //console.log(comments[id-1].name);
    useEffect(() => {
        //busca com id
    },[])
    return(
        <div className="divComment">
            <h1 className="title">Título: {comments[id-1].name}</h1>
            <p><strong>Comentário:</strong> {comments[id-1].body}</p>
            <p className="title"><strong>Autor:</strong> {comments[id-1].email}</p>
            <p></p>
            <NavLink to="/" exact>
                <div className="divButton">
                    <button className="button">Voltar</button>
                </div>
            </NavLink>
        </div>
    );
}

export default FullComment;