import React, {useState,useEffect} from 'react';
import axios from 'axios';
export const CommentsContext = React.createContext();

const CommentsProvider = (props) => {

    const [comments,setComments] = useState([]);
    const [show, setShow] = useState(false);

    //console.log("Comments Provider",comments);

    useEffect(() => {
        //console.log('Fecth data');
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then((response) => {
                setComments(response.data);
            })
            .catch((err) => {
                console.log("Erro ",err);
            })
    }, [])

    const onCommentSubmit = (event) => {
        event.preventDefault();
        //console.log(event.target.name.value);
        let newComments = [...comments,
          {
            id: comments.length + 1,
            name: event.target.name.value,
            body: event.target.body.value
          }
        ];
        setComments(newComments);
        axios.post('https://jsonplaceholder.typicode.com/comments',newComments)
            .then((response) => {
                console.log(response);
                setShow(!show);
            })
            .catch((err) => {
                console.log("Erro",err);
            })
    }
    
    const deleteCommentHandler = (index) => {
        let newComments = comments.slice();
        newComments.splice(index,1);
        setComments(newComments);
        //console.log(comments);
    }

    const onCommentUpdate = (event) => {
        event.preventDefault();
        //console.log("OnCommentUpdate",event.target.id - 1);
        let updatedComment = {
            id: event.target.id,
            name: event.target.name.value,
            body: event.target.body.value
        }
        let newComments = comments.slice();
        newComments.splice(event.target.id - 1,1,updatedComment);
        setComments(newComments);
        //console.log(comments);
        axios.put('https://jsonplaceholder.typicode.com/comments/' + event.target.id,updatedComment)
            .then((response) => {
                console.log(response);
                setShow(!show);
            })
            .catch((err) => {
                console.log("Erro",err);
            })
    }

    return(
        <CommentsContext.Provider value={{
            comments: comments, 
            deleteCommentHandler: deleteCommentHandler, 
            onCommentSubmit: onCommentSubmit,
            onCommentUpdate: onCommentUpdate,
            show: show
        }}>
            {props.children}
        </CommentsContext.Provider>
    );

};

export default CommentsProvider;