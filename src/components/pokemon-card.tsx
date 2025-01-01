import React, { FunctionComponent } from 'react';
import Pokemon from '../models/pokemon';

type Props= {
    pokemon:Pokemon
};

const PokemonCard: FunctionComponent<Props> = ({pokemon}) => {

    const formatType = (type:string) => {
        let color: string;
        switch(type) {
            case 'Feu':
                color = 'red';
                break;
            case 'Eau':
                color = 'blue';
                break;
            case 'Plante':
                color = 'green';
                break;
            case 'Insecte':
                color = 'brown';
                break;
            case 'Normal':
                color = 'grey';
                break;
            case 'Vol':
                color = 'blue';
                break;
            case 'Poison':
                color = 'purple';
                break;
            case 'Fée':
                color = 'pink';
                break;
            case 'Psy':
                color ='purple'
                break;
            case 'Électrique':
                color = 'lime';
                break;
            case 'Combat':
                color = 'orange';
                break;
            default:
                color = 'grey';
                break;
        }
        return `inline-flex items-center rounded-md bg-${color}-50 px-2 py-1 text-xs font-medium text-${color}-700 ring-1 ring-inset ring-${color}-700/10`;
    }

    return(
        <div className="flex justify-evenly">
            <div className="w-64 bg-white border border-gray-200 rounded-lg shadow bg-withe-300 dark:border-gray-700 mx-8">
                <a href="#">
                    <img className="rounded-t-lg" src={pokemon.picture} alt={pokemon.name} />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-500">{pokemon.name}</h5>
                    </a>
                    <ul className="mb-3 font-normal text-gray-100 dark:text-gray-400">
                        <li>Vie : {pokemon.hp}</li>
                        <li>Pouvoir : {pokemon.cp}</li>
                        <li>Type : {pokemon.types.map((type) => (
                            <span className={formatType(type)} key={type}>{type}</span>
                        ))}</li>
                        <li>Créer le : {pokemon.created.toLocaleDateString()}</li>
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default PokemonCard;