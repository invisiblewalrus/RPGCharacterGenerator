import { DnDCharacter } from './DnDCharacter';

export function genRandomDnDChar(){
    let stats = [];
    for(let i = 0; i < 6; i++){
        stats.push(rollStat());
    }
    let newChar =  new DnDCharacter(stats[0], stats[1], stats[2], stats[3], stats[4], stats[5]);
    return newChar;
}

export function rollStat(){
    let rolls = [];
    let min = 0;
    let minIndex;
    //roll 4 numbers, save location of smallest
    for(let i = 0; i < 4; i++){
        let roll = Math.floor(Math.random() * 6) + 1;
        rolls.push(roll);
        if(roll <= min || min === 0){
            min = roll
            minIndex = i;
        }
    }
    //remove min
    rolls.splice(minIndex, 1);
    let sum = 0;
    //add up remaining rolls
    for(let i = 0; i < rolls.length; i++){
        sum += rolls[i];
    }
    return sum;
}