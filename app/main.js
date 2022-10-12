import { cromoOperador } from "./component/cromoOperador/cromo";
import { getData } from './service/api'
import {getCharacters} from './pages/characters'
import './style.css'
import { inicioBtn } from "./component/inicio/inicio";
import { linkPage } from "./utils/linkPage";
import { eventArmisticio,  eventChimera, eventCia, eventIndex, eventInicio, eventMilicia, eventQatala, eventSAS, eventSearch, eventSpetsnaz, eventWarcom } from "./events/events";
import { navPrincipal } from "./component/nav/nav";
  

export let dataList

export const fetchData = async () => {
    const data = await getData()
    dataList = data;
    return data 
  }
















const wall = document.querySelector("#wall")
wall.innerHTML = inicioBtn()

eventInicio()
fetchData()



