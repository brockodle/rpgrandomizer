import './Rando.css';
import React, { useEffect, useState } from 'react';
import { render } from '@testing-library/react';

function Randomizertable() {

    let rpgresults = [
        {
            race: "Human",
            role: "Outcast(s)",
            event: "Threatened",
            action: "Find",
            noun: "The town",
            location: "Their home",
            reason: "Their honor can be restored",
            twist: "They are insane",
            enemy: "The task giver"
        },
        {
            race: "Elf",
            role: "Religious leader(s)",
            event: "grieving a lost family member",
            action: "Help",
            noun: "Sacred object",
            location: "The town",
            reason: "they can exact revenge!",
            twist: "They do not really exist",
            enemy: "A rival of the task giver"
        },
        {
            race: "Dwarf",
            role: "Spellcaster(s)",
            event: "stolen from",
            action: "Restore",
            noun: "The gods",
            location: "The tavern",
            reason: "science happens!",
            twist: "The location is haunted",
            enemy: "A local politician"
        },
        {
            race: "Halfling",
            role: "Fighter(s)",
            event: "Lost",
            action: "Fight",
            noun: "a plant",
            location: "The neighboring town",
            reason: "crops can be restored",
            twist: "The location does not really exist",
            enemy: "A gang of youths"
        },
        {
            race: "Orc",
            role: "Politician(s)",
            event: "Taken from home",
            action: "Spy on",
            noun: "an animal",
            location: "The forest",
            reason: "they gain favor with the gods",
            twist: "They are possessed",
            enemy: "Kobolds"
        },
        {
            race: "Gnome",
            role: "Tavern owner(s)",
            event: "Imprisoned",
            action: "Retrieve",
            noun: "an enemy",
            location: "A cave",
            reason: "you can prove your worth",
            twist: "They betray you",
            enemy: "Zombies"
        },
        {
            race: "Triton",
            role: "Sailor(s)",
            event: "Poisoned",
            action: "Negotiate with",
            noun: "the culprit",
            location: "A desert",
            reason: "they can finally discover the missing piece.",
            twist: "They die or go missing before you can complete the task",
            enemy: "Wild animals"
        },
        {
            race: "Tiefling",
            role: "Druid(s)",
            event: "Sick",
            action: "Complete a ritual involving",
            noun: "elders",
            location: "The sea",
            reason: "they can return home",
            twist: "They are an imposter!",
            enemy: "Pirates"
        },
        {
            race: "Aasmimar",
            role: "Barbarian(s)",
            event: "Injured",
            action: "Discover",
            noun: "a Town leader",
            location: "A shop",
            reason: "they regain their health after a sickness.",
            twist: "They secretly hate you",
            enemy: "No one"
        },
        {
            race: "Half-Elf",
            role: "Blacksmith(s)",
            event: "Outcast",
            action: "Exorcise",
            noun: "some Local thugs",
            location: "An abandoned home",
            reason: "the town can be helped.",
            twist: "They are in love with one of you",
            enemy: "Thieves"
        },
        {
            race: "Half-Orc",
            role: "Entertainer(s)",
            event: "Haunted",
            action: "Entertain",
            noun: "a rare resource",
            location: "A castle",
            reason: "a curse can be broken.",
            twist: "They know you from before…",
            enemy: "Cultists"
        },
        {
            race: "Dragonborne",
            role: "Farmer(s)",
            event: "Being tracked",
            action: "Infiltrate",
            noun: "money",
            location: "The stars",
            reason: "they can be entertained.",
            twist: "They are someone of great power",
            enemy: "A family member of the task giver"
        },
        {
            race: "Genasi",
            role: "Royalty(ies)",
            event: "Cursed",
            action: "create",
            noun: "an unidentified person",
            location: "Another world",
            reason: "nature's balance can be restored!",
            twist: "They are simply testing you",
            enemy: "A well meaning person"
        },
        {
            race: "Vedalken",
            role: "Adventurer(ies)",
            event: "Completing a ritual",
            action: "Contact",
            noun: "a crazy old man",
            location: "A dream",
            reason: "glory can be attained!",
            twist: "They are transformed into an animal",
            enemy: "Dumb citizens"
        },
        {
            race: "Fierbolg",
            role: "Shop owner(s)",
            event: "Studying a new phenomenon",
            action: "Exact revenge on",
            noun: "A strange language",
            location: "Enemy territory",
            reason: "their enemies can be vanquished.",
            twist: "They steal something from you",
            enemy: "Druids"
        },
        {
            race: "Tabaxi",
            role: "Healer(s)",
            event: "Battling a bad reputation",
            action: "Cast a spell on",
            noun: "A series of puzzles",
            location: "A library",
            reason: "a message can be delivered",
            twist: "They work for someone else",
            enemy: "Barbarians"
        },
        {
            race: "Aarakocra",
            role: "Fortune Teller(s)",
            event: "dealing with lost customers",
            action: "Identify",
            noun: "A book",
            location: "A strange community",
            reason: "the playing field can be evened out.",
            twist: "They run a cult",
            enemy: "The police"
        },
        {
            race: "Centaur",
            role: "Thief(ves)",
            event: "Bored",
            action: "Map",
            noun: "The town's crops",
            location: "A huge city",
            reason: "they can gain a reputation.",
            twist: "They worship an evil deity",
            enemy: "A rich noble"
        },
        {
            race: "Fey",
            role: "Academic(s)",
            event: "Fighting an enemy",
            action: "Travel to",
            noun: "An ale",
            location: "A maze",
            reason: "a just ruler can gain control",
            twist: "They have sold their soul",
            enemy: "An eccentric"
        },
        {
            race: "mixed group of",
            role: "Orphan(s)",
            event: "In search of something",
            action: "Convince",
            noun: "A ship",
            location: "A temple",
            reason: "the town is no longer in danger",
            twist: "They control nature",
            enemy: "Just some guy"
        }
    ];

    /*
    
    THIS EXAMPLE CREATES A COMPONENT WITH A DIV AND CHILD
    
    class Hello extends React.Component {
    
        render() {
    
            return (
                React.createElement("div", {classname: "container"},
                    React.createElement(
                        "h1", null, "Getting Started"
                    ),
                    React.createElement(
                        "input", 
                        null
                    ),
                    React.createElement(
                        "pre",null,
                        (new Date).toLocaleTimeString())
                    )
            )
        }
    }
    
    useState(); is a way to set an update for an object
    
    const chgsentence [] = 
    
    */

    let randout = function () {
        this.race = makerolls('race');
        this.role = makerolls('role');
        this.event = makerolls('event');
        this.action = makerolls('action');
        this.noun = makerolls('noun');
        this.location = makerolls('location');
        this.reason = makerolls('reason');
        this.twist = makerolls('twist');
        this.enemy = makerolls('enemy');
    }

    function makerolls(sect) {
        const rando = Math.round(Math.random() * rpgresults.length);
        const c1 = rpgresults[rando];
        return c1[sect].toLowerCase();
    }

    let [s, stchg] = useState();

    let newsent = '';

    const chgsent = () => {
        newsent = new randout();
        return (
            newsent
        )
    };

    function Sentence(props) {
        newsent = new randout();
        console.log(newsent);
        return (
            <div id='sentence'>
                A/an <strong><span style={{ "color": "#ff7c80" }}>{newsent.race} {newsent.role}</span></strong> is <strong><span style={{ "color": "#ffcc66" }}>{newsent.event}</span></strong>,<br />
                so tasks you to <strong><span style={{ "color": "#cfb284" }}>{newsent.action} {newsent.noun}</span></strong> in <strong><span style={{ "color": "#00b050" }}>{newsent.location}</span></strong>
                <br />
                so that <strong><span style={{ "color": "#00b0f0" }}>{newsent.reason}</span></strong><br />
                BUT <strong><span style={{ "color": "#9966ff" }}>{newsent.twist}</span></strong>!
                <div id='enemykind'>
                    <strong>The enemy is <span style={{ "color": "#ff99ff" }}>{newsent.enemy}</span></strong>
                </div>
            </div>
        )
    }

    function Button(props) {
        return (
            <button id="rerun" onClick={() => stchg(props.changeSentence)}>
                Summon Another!
            </button>
        )
    }

    return (
        <div id="randomizer">
            <Sentence newBody={s} />
            <Button changeSentence={chgsent} />
        </div>
    )
}

function Clock() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
      setInterval(() => {
       setTime(new Date());
      }, 1000);
    }, []);
  
   return <pre>{time.toLocaleTimeString()}</pre>

}

export { Randomizertable, Clock }