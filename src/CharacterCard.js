import React from 'react';

export function CharacterCard(props){

    const statsList = props.character.stats.map((stat) =>
        <li key={stat.name}>{stat.name + ": " + stat.value}</li>
    );
    return(
    <div>
        <h1>{props.character.name}</h1>
        <h2>{props.character.species + " " + props.character.job}</h2>
        <ul>{statsList}</ul>
    </div>
    );
}