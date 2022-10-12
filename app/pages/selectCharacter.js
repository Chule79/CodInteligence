import { cromoOperador } from "../component/cromoOperador/cromo";
import { informOperator } from "../component/informOperator/informOperator";
import { eventCharacter } from "../events/events";
import { dataList } from "../main";
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
    const data = dataList
    wall.innerHTML += informOperator(a)
    data.forEach((character) => {
        wall.innerHTML += cromoOperador(character )
      });
      eventCharacter()
  };