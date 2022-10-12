import { cromoOperador } from "../component/cromoOperador/cromo";
import { navPrincipal } from "../component/nav/nav";
import { dataList } from "../main";
import { getCharacters } from "../pages/characters";
import { getArmisticio, getChimera, getCia, getIndex, getMilicia, getQatala, getSas, getSpetsnaz, getWarcom } from "../pages/facciones";
import { searchCharacter } from "../pages/searchCharacters";
import { getSelectCharacter } from "../pages/selectCharacter";



export const addEvents = () => {
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
  }
  




export const eventInicio =  (e) => {
 const iniciar = document.querySelector("#inicioBtn");
    iniciar.addEventListener("click", () => getCharacters())
    ;
}



export const eventSearch =  (a) =>{
    const search = document.querySelector("#btSearch");
    search.addEventListener("click", (e) => {
        const searchInput = document.querySelector("input[type=search]").value
        const nameSearch = searchInput.charAt(0).toUpperCase() + searchInput.substring(1)
        let valorBusca = nameSearch
        const data = dataList
        searchCharacter(data, valorBusca)
    });
    
}




export const eventIndex =  (e) => {
    const index = document.querySelector("#inicio");
        index.addEventListener("click", () => getIndex());
}

export const eventSAS =  (e) => {
    const Sas = document.querySelector("#SAS");
        Sas.addEventListener("click", () => getSas());
}

export const eventWarcom =  (e) => {
    const Warcom = document.querySelector("#Warcom");
        Warcom.addEventListener("click", () => getWarcom());
}

export const eventChimera =  (e) => {
    const Chimera = document.querySelector("#Chimera");
        Chimera.addEventListener("click", () => getChimera());
}

export const eventCia=  (e) => {
    const Cia = document.querySelector("#CIA");
       Cia.addEventListener("click", () => getCia());
}

export const eventMilicia=  (e) => {
    const Milicia = document.querySelector("#Milicia");
        Milicia.addEventListener("click", () => getMilicia());
}

export const eventArmisticio =  (e) => {
    const Armisticio = document.querySelector("#Armisticio");
        Armisticio.addEventListener("click", () => getArmisticio());
}

export const eventQatala =  (e) => {
    const Qatala = document.querySelector("#Qatala");
        Qatala.addEventListener("click", () => getQatala());
}

export const eventSpetsnaz =  (e) => {
    const Spetsnaz =  document.querySelector("#Spetsnaz");
        Spetsnaz.addEventListener("click", () => getSpetsnaz());
}






export const eventCharacter =  () =>{
    const select = document.querySelectorAll('.btnCromo');
    console.log(select);
    select.forEach((sele) => {
        console.log(sele);
        sele.addEventListener("click", (eleg) => {
            const pls = eleg.target.dataset.idOper
            console.log(pls);
            const data = dataList
            getSelectCharacter(data, pls)
        })
      })
}