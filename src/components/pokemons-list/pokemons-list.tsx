import React, { FunctionComponent, useEffect, useState } from 'react';
import { POKEMONS } from '../../models/mock-pokemon';
import Pokemon from '../../models/pokemon';
import PokemonCard from '../pokemon-card/pokemon-card';

const PokemonList: FunctionComponent = () => {

    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(() => {
        setPokemons(POKEMONS);
    }, []);

    return(
        <div>
            <div>Il y a {pokemons.length} pokémons dans l'applications</div>
            <div className="flex justify-evenly">
            {pokemons.map((p) => (
                <PokemonCard key={p.id} pokemon={p} />
            ))}
            </div>
        </div>
    )
}

export default PokemonList;