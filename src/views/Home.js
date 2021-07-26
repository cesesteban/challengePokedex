import React, { useState } from 'react';
import Cards from '../components/Cards/Cards';
import NavBar from '../components/NavBar/NavBar';
import SearchBar from '../components/SearchBar/SearchBar';

function Home(props) {
    const [stateSearch, setStateSearch] = useState("")
    return (
        <div>
            <NavBar/>
            <SearchBar stateSearch={stateSearch} setStateSearch={setStateSearch}/>
            <Cards stateSearch={stateSearch}/>
        </div>
    );
}

export default Home;