import { cromoOperador } from "../component/cromoOperador/cromo";
import { informOperator } from "../component/informOperator/informOperator";
import { eventCharacter } from "../events/events";
import { dataList } from "../main";
import { cleanPage } from "../utils/cleanPage";


export const getIndex = async () => {
    const wall = document.querySelector("#wall") 
    cleanPage(wall)
    const data = dataList;
    printIndex(data);
  };
  
 const printIndex = (list) => {
    const wall = document.querySelector("#wall");
    list.forEach((data) => {
      wall.innerHTML += cromoOperador(data)
    })
    eventCharacter()
}


export const getSas = async () => {
    const wall = document.querySelector("#wall") 
    cleanPage(wall)
    const opers = dataList;
        for (const oper of opers) {
            if (oper.unit.includes("SAS")){
                printSas(oper)
            }
        };
    }


const printSas = (oper) => {
    const wall = document.querySelector("#wall");
    wall.innerHTML += cromoOperador(oper)  
    eventCharacter() 
}



export const getWarcom = async () => {
    const wall = document.querySelector("#wall") 
    cleanPage(wall)
    const opers = dataList;
        for (const oper of opers) {
            if (oper.unit.includes("Warcom")){
                printWarcom(oper)
            }
        };
    }


const printWarcom = (oper) => {
    const wall = document.querySelector("#wall");
    wall.innerHTML += cromoOperador(oper)  
    eventCharacter() 
}




export const getChimera = async () => {
    const wall = document.querySelector("#wall") 
    cleanPage(wall)
    const opers = dataList;
        for (const oper of opers) {
            if (oper.unit.includes("Chimera")){
                printChimera(oper)
            }
        };
    }


const printChimera = (oper) => {
    const wall = document.querySelector("#wall");
    wall.innerHTML += cromoOperador(oper)  
    eventCharacter() 
}





export const getCia = async () => {
    const wall = document.querySelector("#wall") 
    cleanPage(wall)
    const opers = dataList;
        for (const oper of opers) {
            if (oper.unit.includes("CIA")){
                printCia(oper)
            }
        };
    }


const printCia = (oper) => {
    const wall = document.querySelector("#wall");
    wall.innerHTML += cromoOperador(oper)  
    eventCharacter() 
}





export const getMilicia = async () => {
    const wall = document.querySelector("#wall") 
    cleanPage(wall)
    const opers = dataList;
        for (const oper of opers) {
            if (oper.unit.includes("Milicia")){
                printSas(oper)
            }
        };
    }


const printMilicia = (oper) => {
    const wall = document.querySelector("#wall");
    wall.innerHTML += cromoOperador(oper)   
    eventCharacter()
}






export const getArmisticio = async () => {
    const wall = document.querySelector("#wall") 
    cleanPage(wall)
    const opers = dataList;
        for (const oper of opers) {
            if (oper.unit.includes("Armisticio")){
                printArmisticio(oper)
            }
        };
    }


const printArmisticio = (oper) => {
    const wall = document.querySelector("#wall");
    wall.innerHTML += cromoOperador(oper)  
    eventCharacter() 
}






export const getQatala = async () => {
    const wall = document.querySelector("#wall") 
    cleanPage(wall)
    const opers = dataList;
        for (const oper of opers) {
            if (oper.unit.includes("Al Qatala")){
                printQatala(oper)
            }
        };
    }


const printQatala = (oper) => {
    const wall = document.querySelector("#wall");
    wall.innerHTML += cromoOperador(oper) 
    eventCharacter()  
}







export const getSpetsnaz = async () => {
    const wall = document.querySelector("#wall") 
    cleanPage(wall)
    const opers = dataList;
        for (const oper of opers) {
            if (oper.unit.includes("Spetsnaz")){
                printSpetsnaz(oper)
            }
        };
    }


const printSpetsnaz = (oper) => {
    const wall = document.querySelector("#wall");
    wall.innerHTML += cromoOperador(oper)   
    eventCharacter()
}

