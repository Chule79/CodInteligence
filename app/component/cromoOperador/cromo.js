import "./cromo.css"

export const cromoOperador = (character) => {
    const cromo = `
        <div class="cromo" id="cromo" >
            <div class="cromoImg" id="cromoImg">
                <img id="imgOperador" src="${character.image}">
                </img>
            </div>
            <p>Nombre - ${character.name}</p>
            <p>Edad - ${character.age}</p>
            <p>Nacion - ${character.nation}</p>
            <p>Faccion - ${character.unit}</p>
            <button  type="button" id="cromoBtn">Investigar</button>
        </div>
    `
    return cromo
}