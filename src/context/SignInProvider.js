import React, {useState,useEffect} from 'react';
import axios from 'axios';
export const SignInContext = React.createContext();

const SignInProvider = (props) => {
    const[users,setUsers] = useState([]);
    const[status,setStatus] = useStatus(false);
    const[user,setUser] = useStatus([]);

    //console.log("Login Provider",todos);

    useEffect(() => {
        //console.log('Fecth data');
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                setUsers(response.data);
            })
            .catch((err) => {
                console.log("Erro ",err);
            })
    }, [])

    const onSignInSubmit = (event) => {
        event.preventDefault();
        //console.log(event.target.user.value);
        {users.map((user,index) => {
            //console.log(user.id);
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
        setTodos(newTodos);
        axios.post('https://jsonplaceholder.typicode.com/posts/1/comments/',newTodos)
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log("Erro",err);
            })
    }
    
    const deleteTodoHandler = (index) => {
        let newTodos = todos.slice();
        newTodos.splice(index,1);
        setTodos(newTodos);
        console.log(todos);
    }

    const onTodoUpdate = (event) => {
        event.preventDefault();
        console.log("OnTodoUpdate",event.target.id - 1);
        let updatedTodo = {
            id: event.target.id - 1,
            name: event.target.name.value
        }
        let newTodos = todos.slice();
        newTodos.splice(event.target.id - 1,1,updatedTodo);
        setTodos(newTodos);
        console.log(todos);
        axios.put('https://jsonplaceholder.typicode.com/posts/1/comments/' + event.target.id,updatedTodo)
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log("Erro",err);
            })
    }

    return(
        <TodosContext.Provider value={{
            todos: todos, 
            deleteTodoHandler: deleteTodoHandler, 
            onTodoSubmit: onTodoSubmit,
            onTodoUpdate: onTodoUpdate
        }}>
            {props.children}
        </TodosContext.Provider>
    );

};

export default SignInProvider;