import { Character } from './Character';
import { Stat } from './Stat';

const DnDStats = ["STR", "DEX", "CON", "INT", "WIS", "CHA"];
const DnDSpecies = ["Dragonborn", "Dwarf", "Elf", "Halfling", "Human", "Gnome", "Half-Elf", "Half-Orc", "Tiefling"];
const DnDJobs = ["Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard"];

export function genRandomDnDChar(){
    let stats = [];
    for(let x in DnDStats){
        let statName = DnDStats[x];
        let statVal = rollDnDStat();
        let stat = new Stat(statName, statVal);
        stats.push(stat);
    }
    let name = "Kate";
    let species = DnDSpecies[Math.floor(Math.random() * DnDSpecies.length)];
    let job = DnDJobs[Math.floor(Math.random() * DnDJobs.length)];
    let description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
    let newChar =  new Character(name, species, job, description, stats);
    return newChar;
}

export function rollDnDStat(){
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
    for(let x in rolls){
        sum += rolls[x];
    }
    return sum;
}