import "./informOperator.css"

export const informOperator = (character) => {
    const info = `
    
    <div class="aviso" id="aviso" >
    <div class="dni">
        <div class="infoImg" id="infoImg">
            <img id="infoImgOper" src="${character.image}">
        </img>
        </div>
        <div class="primera">
            <div class="datos">
                <p>Nombre - ${character.name}</p>
            </div>
  
            <div class="datos">
                <p>Edad - ${character.age}</p>
            </div>
                
            <div class="datos">
                <p>Nacion - ${character.nation}</p>
            </div>
        </div>
        <div class="segunda">
          
            <div class="datos">
                <p>Faccion - ${character.unit}</p>
            </div>
                
            <div class="datos">
                <p>Abilidad - ${character.ability}</p>
            </div>
        
            <div class="datos">
                Estado - ${character.service}</p>
            </div> 
          </div> 
        </div>
  
    <div class="descripcion">
         ${character.description}</p>
    </div>    
  </div>
    `
    return info
}