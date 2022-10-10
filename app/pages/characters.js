import { getData } from './../service/api'
import { cromoOperador } from '../component/cromoOperador/cromo';
import { cleanPage } from '../utils/cleanPage';

export const getCharacters = async () => {
    const app = document.querySelector("#wall")
    cleanPage(app)
    const characters = await getData("characters");
    console.log(characters);
    printCharacters(characters);
  };
  
  const printCharacters = (list) => {
    const wall = document.querySelector("#wall");
    list.forEach((character) => {
        wall.innerHTML += cromoOperador(character)
    });
    
  };
  
 
  