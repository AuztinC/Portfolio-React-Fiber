import React, { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, SpotLight, useDepthBuffer } from '@react-three/drei'
import Nod_Modes from './Nod_Modes'
import Stairs_Model from '../assets/obj/mossy_wooden_stairs/Scene'
import Nintendo_Model from '../assets/obj/nintendo_64_logo/Scene'
import Skateboard_Model from '../assets/obj/skateboard_01/Scene'
import Pizza_Model from '../assets/obj/pizza/Scene'
import DrumKit_Model from '../assets/obj/drum_kit_for_your_band/Scene'
import CloudStrife_Model from '../assets/obj/cloud-strife/Scene'
import { Vector3 } from 'three'

const sizes = {
	width: window.innerWidth,
	height: window.innerHeight
  };
  
  const cursor = {
	x: 0,
	y: 0
  };
  
  const Camera = () => {
	const { camera } = useThree()
	const cameraRef = useRef(camera);
	var mouseTolerance = 5;
	useEffect(()=>{
	  window.addEventListener("mousemove", (event)=>{
		cursor.x = event.clientX / sizes.width - 0.5;
		cursor.y = event.clientY / sizes.height - 0.5;
	  });
	  
	}, [])
	
	// useFrame(() => {
	//   if (cameraRef.current) {
	// 	cameraRef.current.position.x = -cursor.x * mouseTolerance;
	// 	cameraRef.current.position.y = cursor.y * mouseTolerance;
	// 	// cameraRef.current.lookAt(0, 0, 10)
	//   }
	// });
	
	return (
	  null
	);
  };
  
  function MovingSpot({ vec = new Vector3(), ...props }) {
	
	const light = useRef()
	const viewport = useThree((state) => state.viewport)
	useFrame((state) => {
		// console.log(state.viewport)
	  light.current.target.position.lerp(vec.set((state.pointer.x * viewport.width) / 2, (state.pointer.y * viewport.height) / 2, 0), 0.1)
	  light.current.target.updateMatrixWorld()
	})
	return <spotLight castShadow ref={light} penumbra={1} distance={100} angle={0.75} attenuation={100} anglePower={.5} intensity={15000} {...props} />
  }
  
  
  const Scene = () =>{
	const [selected, setSelected] = useState(null)
	
	function handleclick(event){
		event.eventObject.rotation = [0, 1, 0]
	}
	
	const depthBuffer = useDepthBuffer({ frames: 1 })
	return (
		<>
			{/* <mesh>
		  	<boxGeometry args={[1, 5, 1]} />
      		<meshStandardMaterial color={'hotpink'} />
			</mesh> */}
			<MovingSpot  color="white" position={[20, 0, 30]} />
			<ambientLight intensity={0.03} color={"white"}/>
			{/* <ambientLight intensity={2} color={"white"}/> */}
			{/* <directionalLight intensity={5}/> */}
			{/* <pointLight intensity={ 1000 }/> */}
			{/* <Pizza_Model scale={ 1 } position={[80, -25, -10]}/> */}
			<DrumKit_Model scale={ .18 } position={[35, -25, -10]}/>
			<CloudStrife_Model scale={ 2.5 } position={[80, 15, -10]}/>
			<mesh position={[-5, -10, 0]} onClick={ handleclick }>
				<Stairs_Model scale={ 2.6 } position={[0, 20, 0]}/>
				<Skateboard_Model scale={ 6 } rotation={[.5, 0, 0]} position={[0, 33, 3]}/>
			</mesh>
			<Nintendo_Model scale={ 20 } position={[80, -25, -10]}/>
		</>
	)
  }
  
export default function Hero_Content() {
	
	  
  return (
  <>
  
  	{/* <div className='hero-canvas'>
	  <Canvas camera={{ fov: 75, position: [0,0, 50]}}>
	  <Camera />
	  <Scene />
	  <OrbitControls />
	  </Canvas>
	</div>	 */}
	<div className='hero-canvas'>
		<Nod_Modes />
	</div>	
	<div className="hero-content">
		<h1>Austin Cripe</h1>
		<p>Full stack developer</p>
		
	</div>

  </>)
  
  
}
