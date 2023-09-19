import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";


const       Experience = () =>{
    const boxRef = useRef();

    useFrame((estate,delta) => {
        
        (boxRef.current.rotation.x += 1*delta);
    });
    return (
        
        <>
        <ambientLight intensity={1} />//luz
        <directionalLight position={[10,10,5]} intensity={3}/>

        <mesh ref={boxRef}>     //primer objeto //boxRef es la constante
        <OrbitControls makeDefault={true} args={[100,100,100]} //control
        enablePan = {false}/> //control
         <boxGeometry args={[1,1,1]} />
         <meshStandardMaterial  wireframe={false} position={[10 ,10,10]}color={"red"}    />
        </mesh>
        </>
    )
}
export default Experience;