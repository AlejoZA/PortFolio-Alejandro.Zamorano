import {createRoot} from "react-dom/client";
import Experience from "./Experience";
import "./style.css"
import { Canvas } from "@react-three/fiber";
import { PositionalAudio } from "three";
import app from "./app";


const root = createRoot(document.getElementById("root"));


root.render(//renderizador no del dom solo de threjs- experience ya renderiza por ser hijo de canvas
    
         
   <app/>
    

);