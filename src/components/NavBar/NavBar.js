import React from 'react';
import { useDispatch } from 'react-redux';
import logo from '../../assets/img/Pokeball.png'
import { getAll } from '../../store/action';
import './NavBar.css'

function NavBar(props) {
    const dispatch = useDispatch()
    return (
        <div className="navbar">
            <img src={logo} className="img" alt="logo"/>
            <div onClick={()=>{dispatch(getAll("https://pokeapi.co/api/v2/pokemon"))}} className="title">Pokédex</div>
            <div className="vector">#↓</div>
        </div>
    );
}

export default NavBar;