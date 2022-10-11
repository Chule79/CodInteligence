import "./inicio.css"
export const inicioBtn = () => {
    const boton = `
    <div>
        <div class="mydiv animate-bg">
            <button type="button" id="inicioBtn" class="inicioBtn" >LANZAR UAV</button>
        </div> 
        <video autoplay muted loop id="myVideo">
            <source src="../../public/intro.mp4" type="video/mp4">
        </video>
        <di class="uav"> 

        </di>
    </div>
    `
    return boton
}

