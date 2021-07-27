import React, { useState } from 'react';
import Cards from '../components/Cards/Cards';
import NavBar from '../components/NavBar/NavBar';
import SearchBar from '../components/SearchBar/SearchBar';

function Home(props) {
    const [stateSearch, setStateSearch] = useState("")
    const [URL, setURL] = useState("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0");
    return (
        <div>
            <NavBar URL={URL}/>
            <SearchBar stateSearch={stateSearch} setStateSearch={setStateSearch}/>
            <Cards setURL={setURL} stateSearch={stateSearch}/>
        </div>
    );
}

export default Home;