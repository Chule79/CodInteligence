import { cromoOperador } from "../component/cromoOperador/cromo";
import { navPrincipal } from "../component/nav/nav";
import { dataList } from "../main";
import { getCharacters } from "../pages/characters";
import { getArmisticio, getChimera, getCia, getIndex, getMilicia, getQatala, getSas, getSpetsnaz, getWarcom } from "../pages/facciones";
import { searchCharacter } from "../pages/searchCharacters";
import { getSelectCharacter } from "../pages/selectCharacter";



export const addEvents = () => {
    eventSearch();
    eventIndex();
    eventSAS();
    eventWarcom();
    eventChimera();
    eventCia();
    eventMilicia();
    eventArmisticio();
    eventQatala();
    eventSpetsnaz();  
  }
  




export const eventInicio =  () => {
 const iniciar = document.querySelector("#inicioBtn");
    iniciar.addEventListener("click", () => getCharacters());
    
}



export const eventSearch =  () =>{
    const search = document.querySelector("#btSearch");
    search.addEventListener("click", () => {
        const searchInput = document.querySelector("input[type=search]").value;
        const nameSearch = searchInput.charAt(0).toUpperCase() + searchInput.substring(1);
        let valorBusca = nameSearch;
        const data = dataList;
        searchCharacter(data, valorBusca);
    });
    
}




export const eventIndex =  () => {
    const index = document.querySelector("#inicio");
        index.addEventListener("click", () => getIndex());
}

export const eventSAS =  () => {
    const Sas = document.querySelector("#SAS");
        Sas.addEventListener("click", () => getSas());
}

export const eventWarcom =  () => {
    const Warcom = document.querySelector("#Warcom");
        Warcom.addEventListener("click", () => getWarcom());
}

export const eventChimera =  () => {
    const Chimera = document.querySelector("#Chimera");
        Chimera.addEventListener("click", () => getChimera());
}

export const eventCia=  () => {
    const Cia = document.querySelector("#CIA");
       Cia.addEventListener("click", () => getCia());
}

export const eventMilicia=  () => {
    const Milicia = document.querySelector("#Milicia");
        Milicia.addEventListener("click", () => getMilicia());
}

export const eventArmisticio =  () => {
    const Armisticio = document.querySelector("#Armisticio");
        Armisticio.addEventListener("click", () => getArmisticio());
}

export const eventQatala =  () => {
    const Qatala = document.querySelector("#Qatala");
        Qatala.addEventListener("click", () => getQatala());
}

export const eventSpetsnaz =  () => {
    const Spetsnaz =  document.querySelector("#Spetsnaz");
        Spetsnaz.addEventListener("click", () => getSpetsnaz());
}






export const eventCharacter =  () =>{
    const select = document.querySelectorAll('.btnCromo');
    console.log(select);
    select.forEach((sele) => {
        console.log(sele);
        sele.addEventListener("click", (eleg) => {
            const pls = eleg.target.dataset.idOper;
            console.log(pls);
            const data = dataList;
            getSelectCharacter(data, pls);
        })
      })
}