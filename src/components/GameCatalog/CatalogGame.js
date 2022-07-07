import { useEffect, useState } from "react";
import GameCard from "./GameCard";
import { Spinner } from "./Spinner";

import * as gameService from '../../services/gameService';

const CatalogGame = ({
    navigationChangeHandler,
}) => {
    const [games, setGames] = useState([]);
    const [loading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            gameService.getAll()
                .then(result => {
                    setGames(result);
                    setIsLoading(false)
                });
        },1000)

    }, [])

    return (
        <section id="catalog-page">
            <h1>All Games</h1>


            {loading
                ? <Spinner />
                : games.length > 0
                    ? games.map(x => <GameCard key={x._id} game={x} navigationChangeHandler={navigationChangeHandler} />)
                    : <h3 className="no-articles">No articles yet</h3>
            }

        </section>
    )
}

export default CatalogGame;

