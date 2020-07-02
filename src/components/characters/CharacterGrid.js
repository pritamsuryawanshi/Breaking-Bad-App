import React from 'react';
import CharacterItems from "./CharacterItems";

const CharacterGrid = ({items, isLoading}) => {
    return isLoading ? <h1>loading..</h1> : <section className={'cards'}>
        {items.map(item => (
            <CharacterItems item={item}></CharacterItems>
        ))}
    </section>
};

export default CharacterGrid;
