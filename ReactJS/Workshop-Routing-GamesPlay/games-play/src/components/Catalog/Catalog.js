import { useEffect, useState } from "react";
import * as gameService from '../../services/gameService'
import CatalogItem from "./CatalogItem/CatalogItem";


export const Catalog = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        gameService.getAll()
            .then(result => setGames(result));
    }, []);

    return (<section id="catalog-page">
        <h1>All Games</h1>
        {/* Display div: with information about every game (if any) */}

        {games.map(game => (
            <CatalogItem key={game._id}{...game} />
        ))}


        {/* Display paragraph: If there is no games  */}
        {games.length === 0 && <h3 className="no-articles">No articles yet</h3>}
    </section>)
}