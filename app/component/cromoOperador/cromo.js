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
            <div data-idOper=${character.id} id=${character.id} class="btnCromo"><a id=${character.id}>Investigar</a></div>
        </div>
    `
    return cromo
    
}