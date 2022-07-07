import { createElement, useState } from "react";

import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld";
import CatalogGame from "./components/GameCatalog/CatalogGame";
import CreateGame from "./components/CreateGame";
import Login from "./components/Login";
import Register from "./components/Register";
import ErrorPage from "./components/ErrorPage";
import DetailsGame from "./components/DetailsGame";




function App() {
    const [page, setPage] = useState('/home');
    
    const navigationChangeHandler = (path) =>{
        console.log(path);
        setPage(path);
    }

   

    const router = (path) => {
        let pathName = path.split('/');

        let rootPath = pathName[1];
        let argument = pathName[2];

        const routes = {
            'home': <WelcomeWorld/>, 
            'games': <CatalogGame navigationChangeHandler={navigationChangeHandler}/>,
            'create-game': <CreateGame/>,
            'login': <Login/>,
            'register': <Register/>,
            'details': <DetailsGame id ={argument} />,
        };

        return routes[rootPath]
    }


    

    return (
        <div id="box">

            <Header 
                navigationChangeHandler={navigationChangeHandler}
            />

            <main id="main-content">
                { router(page) || <ErrorPage/>}

                {/* <WelcomeWorld /> */}
            </main>



        </div>
    );
}

export default App;
