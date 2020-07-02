import React from 'react';
import CharacterItems from "./CharacterItems";
import Spinner from "../ui/Spinner";

const CharacterGrid = ({items, isLoading}) => {
    return isLoading ? <Spinner/>: <section className={'cards'}>
        {items.map(item => (
            <CharacterItems item={item}></CharacterItems>
        ))}
    </section>
};

export default CharacterGrid;
