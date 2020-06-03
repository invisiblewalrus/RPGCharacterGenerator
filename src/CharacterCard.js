import React from 'react';
import styles from './cardstyle.module.css'

export function CharacterCard(props){

    const statsList = props.character.stats.map((stat) =>
        <li key={stat.name}>{stat.name + ": " + stat.value}</li>
    );
    return(
    <div className={styles.main}>
        <h1 className={styles.title}>{props.character.name}</h1>
        <h2>{props.character.species + " " + props.character.job}</h2>
        <ul>{statsList}</ul>
    </div>
    );
}