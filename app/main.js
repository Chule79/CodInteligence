import { cromoOperador } from "./component/cromoOperador/cromo";
import { getData } from './service/api'
import {getCharacters} from './pages/characters'
import './style.css'
import { inicioBtn } from "./component/inicio/inicio";
import { linkPage } from "./utils/linkPage";
import { eventInicio } from "./events/events";


const wall = document.querySelector("#wall")
wall.innerHTML = inicioBtn()

eventInicio()

