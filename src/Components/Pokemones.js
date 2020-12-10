import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {obtenerPokemonsAction} from '../Redux/pokesDucks'

const Pokemones = () => {
    const dispath = useDispatch();
    const pokemones = useSelector(store => store.pokemones.array);
    return (
        <div>
            <h1>Pokemones</h1>
            <button onClick={() => dispath(obtenerPokemonsAction())}>Obtener</button>
            <ul>
                {
                    pokemones.map(item => (
                        <li key={item.name}>{item.name}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Pokemones;