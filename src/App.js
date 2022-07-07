import { createElement, useState } from "react";

import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld";
import CatalogGame from "./components/CatalogGame";
import CreateGame from "./components/CreateGame";


function App() {
    const [page, setPage] = useState('/home');

    const routes = {
        '/home': <WelcomeWorld/>, 
        '/games': <CatalogGame/>,
        '/create-game': <CreateGame/>,
    };

    const navigationChangeHandler = (path) =>{
        console.log(path);
        setPage(path);
    }

    return (
        <div id="box">

            <Header 
                navigationChangeHandler={navigationChangeHandler}
            />

            <main id="main-content">
                { routes[page] || <h2>No Page Found!</h2>}

                {/* <WelcomeWorld /> */}
            </main>



        </div>
    );
}

export default App;
