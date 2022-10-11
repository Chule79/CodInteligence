import { getData } from './../service/api'
import { cromoOperador } from '../component/cromoOperador/cromo';
import { cleanPage } from '../utils/cleanPage';
import { navPrincipal } from "./../component/nav/nav";
import { eventSearch } from '../events/events';
import { eventArmisticio, eventChimera, eventCia, eventIndex, eventInicio, eventMilicia, eventQatala, eventSAS, eventSpetsnaz, eventWarcom } from "../events/events";






export const getCharacters = async () => {
    const wall = document.querySelector("#wall") 
    cleanPage(wall)
    const characters = await getData("characters");
    printCharacters(characters);
  };
  
 export const printCharacters = (list) => {
    const wall = document.querySelector("#wall");
    list.forEach((character) => {
      wall.innerHTML += cromoOperador(character)
    });
    const header = document.querySelector("header")
    header.innerHTML += navPrincipal
    eventSearch()
    eventIndex()
    eventSAS()
    eventWarcom()
    eventChimera()
    eventCia()
    eventMilicia()
    eventArmisticio()
    eventQatala()
    eventSpetsnaz()
  };
  
 
  