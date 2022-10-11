import { navPrincipal } from "../component/nav/nav";
import { dataList } from "../main";
import { getCharacters } from "../pages/characters";
import { searchCharacter } from "../pages/searchCharacters";




export const eventInicio = async (e) => {
 const iniciar = await document.querySelector("#inicioBtn");
    iniciar.addEventListener("click", () => getCharacters());
}



export const eventSearch = async (a) =>{
    const search = await document.querySelector("#btSearch");
    search.addEventListener("click", (e) => {
        const searchInput = document.querySelector("input[type=search]").value
        let valorBusca = searchInput
        const data = dataList
        searchCharacter(data, valorBusca)
    });
    
}




export const eventIndex = async (e) => {
    const index = await document.querySelector("#inicio");
    console.log("1");
        index.addEventListener("click", () => getCharacters());
}

export const eventSAS = async (e) => {
    const Sas = await document.querySelector("#SAS");
        Sas.addEventListener("click", () => getCharacters());
}

export const eventWarcom = async (e) => {
    const Warcom = await document.querySelector("#Warcom");
        Warcom.addEventListener("click", () => getCharacters());
}

export const eventChimera = async (e) => {
    const Chimera = await document.querySelector("#Chimera");
        Chimera.addEventListener("click", () => getCharacters());
}

export const eventCia= async (e) => {
    const Cia = await document.querySelector("#CIA");
       Cia.addEventListener("click", () => getCharacters());
}

export const eventMilicia= async (e) => {
    const Milicia = await document.querySelector("#Milicia");
        Milicia.addEventListener("click", () => getCharacters());
}

export const eventArmisticio = async (e) => {
    const Armisticio = await document.querySelector("#Armisticio");
        Armisticio.addEventListener("click", () => getCharacters());
}

export const eventQatala = async (e) => {
    const Qatala = await document.querySelector("#Qatala");
        Qatala.addEventListener("click", () => getCharacters());
}

export const eventSpetsnaz = async (e) => {
    const Spetsnaz = await document.querySelector("#Spetsnaz");
        Spetsnaz.addEventListener("click", () => getCharacters());
}