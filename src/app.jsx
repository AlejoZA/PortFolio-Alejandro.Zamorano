import { Canvas } from "@react-three/fiber"
import Experience from "./Experience"




const app = ()=>{
    return (
    <>
    <info/>
   <Canvas //three,js
        camera ={{position:[3 ,2,4]}}
    >  
        <Experience/> 
    </Canvas>
        
    </> )
}
export default app;

