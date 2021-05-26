import React from 'react';
import './Header.css'
import {NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <header className="Header">
            <nav>
                <ul>
                    <li><NavLink to="/" exact>Inicio</NavLink></li>
                    <li><NavLink to="/novocomentario" exact>Novo Comentário</NavLink></li>
                    <li><NavLink to="/meuscomentarios" exact>Meus Comentários</NavLink></li>
                    <li><NavLink to="/login" exact>Login</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;