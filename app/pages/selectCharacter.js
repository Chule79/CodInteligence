import { informOperator } from "../component/informOperator/informOperator";
import { cleanPage } from "../utils/cleanPage";

export const getSelectCharacter =  (array, seleccionado) => {
    
    const wall = document.querySelector("#wall") 
    cleanPage(wall)
    console.log(seleccionado)
    console.log(array)
    for (const person of array) {
        if (person.id === seleccionado){
           
            printSelectCharacters(person)
        }
    };
}


const printSelectCharacters =  (a) => {
    const wall = document.querySelector("#wall");
    wall.innerHTML += informOperator(a)
  };