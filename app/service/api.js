
export const getData = async () => {
    try {
        const conexionData = await fetch("http://localhost:8080/Characters")
        const translateData = await conexionData.json();
        return translateData
    } catch (error) {
        console.log(error) 
    }
}

