
export const getData = async () => {
    try {
        const conexionData = await fetch("https://cod-intelligence.onrender.com/Characters")
        const translateData = await conexionData.json();
        return translateData
    } catch (error) {
        console.log(error) 
    }
}

