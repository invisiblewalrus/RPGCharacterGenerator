import React, { useEffect, useState } from 'react';
import styles from './cardstyle.module.css'
import axios from 'axios';

export function CharacterCard(props){
    const [name, setName] = useState("Loading...");

    const statsList = props.character.stats.map((stat) =>
        <li key={stat.name}>{stat.name + ": " + stat.value}</li>
    );

    //not sure about generating this name here, 
    //but if I want to change it to character gen,
    //I need to figure out state management better
    //also, need to find a fantasy/sci-fi name api
    useEffect(() => {
        axios.get('https://randomuser.me/api')
        .then(res => {
            const person = res.data.results[0].name;
            const name = person.first + " " + person.last
            setName(name);
        })
    }, [])

    return(
    <div className={styles.main}>
        <h1 className={styles.title}>{name}</h1>
        <h2>{props.character.species + " " + props.character.job}</h2>
        <ul>{statsList}</ul>
    </div>
    );
}