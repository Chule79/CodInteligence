import { cromoOperador } from "../component/cromoOperador/cromo";
import { informOperator } from "../component/informOperator/informOperator";
import { dataList } from "../main";
import { cleanPage } from "../utils/cleanPage";






export const searchCharacter = (data, prueba) =>{
    const wall = document.querySelector("#wall") 
    cleanPage(wall)
    for (const oper of data) {
        if (oper.name.includes(prueba)){
            console.log(oper);
            printSearchCharacters(oper);
        }
    };
}



const printSearchCharacters = (a) => {
    const wall = document.querySelector("#wall");
    const data = dataList
    wall.innerHTML += informOperator(a)
    data.forEach((character) => {
        wall.innerHTML += cromoOperador(character )
      });
  };
