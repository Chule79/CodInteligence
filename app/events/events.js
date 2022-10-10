import { getCharacters } from "../pages/characters";

export const eventInicio = async (e) => {
 const iniciar = await document.querySelector("#inicioBtn");
    iniciar.addEventListener("click", () => getCharacters());
}