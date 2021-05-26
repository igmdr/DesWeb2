import React,{useContext} from 'react';

const SignIn = () => {

    return (
        <div className="divComment">
            <h1 className="title">Login</h1>
            <form>
                <p></p>
                <input className="textInput" type="text" id="user" placeholder="Usuário"/>
                <p></p>
                <input className="textInput" type="password" id="password" placeholder="Senha"/>
                <p></p>
                <div className="divButton">
                    <input className="button" type="submit" value="Entrar"/>
                </div>
            </form>
        </div>
    );
}

export default SignIn;