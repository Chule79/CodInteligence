import "./nav.css"
export const navPrincipal = () =>{
 const naviP =
    `<nav> 
        <input type="checkbox" id="menu">
        <label for="menu">  
            <img src="../../public/icon.png" class="icon"> 
        </label>

        <ul id='navi' class='navi'>

            <li>
                <div class='searchOperador'>
                    <input id="searchInput" type="search" name="q" placeholder="Find Operator"  >
                    <button id="btSearch" type="button">🔎</button>
                </div>
            </li>

            
            <li>
                <a href="#" id="inicio">Inicio</a>  
            </li>
            <li>
                <a href="#" id="SAS">SAS</a> 
            </li>
            <li>
                <a href="#" id="Warcom">Warcom</a>
            </li>
            <li>
                <a href="#" id="Chimera">Chimera</a>
            </li>
            <li>
                <a href="#" id="CIA">CIA</a>
            </li>
            <li>
                <a href="#" id="Milicia">Milicia</a>
            </li>
            <li>
                <a href="#" id="Armisticio">Armisticio</a>
            </li>
            <li>
                <a href="#" id="Qatala">Al Qatala</a>
            </li>
            <li>
                <a href="#" id="Spetsnaz">Spetsnaz</a>
            </li>

        </ul>
     </nav>
     `
}