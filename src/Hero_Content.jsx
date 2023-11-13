
import React, { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { motion, useScroll, useSpring, useMotionValue, useMotionValueEvent, useMotionTemplate, useTransform } from 'framer-motion'
import Stairs_Model from '../assets/obj/mossy_wooden_stairs/Scene'
import Nintendo_Model from '../assets/obj/nintendo_64_logo/Scene'
import Skateboard_Model from '../assets/obj/skateboard_01/Scene'
import { Vector3 } from 'three'

const cv = document.querySelector('.hero-canvas')
const sizes = {
	width: window.innerWidth,
	height: window.innerHeight
  };
  
  const cursor = {
	x: 0,
	y: 0
  };
  
//   const Camera = () => {
// 	const { camera } = useThree()
// 	const cameraRef = useRef(camera);
// 	var mouseTolerance = 5;
// 	useEffect(()=>{
// 	  window.addEventListener("mousemove", (event)=>{
// 		cursor.x = event.clientX / sizes.width - 0.5;
// 		cursor.y = event.clientY / sizes.height - 0.5;
// 	  });
	  
// 	}, [])
	
// 	useFrame(() => {
// 	  if (cameraRef.current) {
// 		cameraRef.current.position.x = -cursor.x * mouseTolerance;
// 		cameraRef.current.position.y = cursor.y * mouseTolerance;
// 		cameraRef.current.lookAt(0, 0, 10)
// 	  }
// 	});
	
// 	return (
// 	  null
// 	);
//   };
  
export default function Hero_Content() {
	
	useEffect(()=>{
		window.addEventListener("mousemove", (event)=>{
		  cursor.x = event.clientX / sizes.width - 0.5;
		  cursor.y = event.clientY / sizes.height - 0.5;
		});
		
	  }, [])
	  
  return (
  <>
  
  	<div className='hero-canvas'>
	  <Canvas camera={{ fov: 75, position: [0,0, 80]}}>
		{/* <Camera /> */}
		  {/* <mesh>
		  <boxGeometry args={[1, 5, 1]} />
      		<meshStandardMaterial color={'hotpink'} />
		  </mesh> */}
		  <ambientLight />
		  <directionalLight intensity={5}/>
		  {/* <pointLight intensity={ 1000 }/> */}
		  <Stairs_Model scale={ 2 } position={[25, 25, 0]}/>
		  <Skateboard_Model scale={ 6 } rotation={[.5, 0, 0]} position={[25, 38, 0]}/>
		  <Nintendo_Model scale={ 20 } position={[25, 0, 0]}/>
		  <OrbitControls />
	  </Canvas>
	</div>	
	<div className="hero-content">
		<h1>Austin Cripe</h1>
		<p>Full stack developer</p>
		
	</div>

  </>)
  
  
=======
import React, { useRef, useState } from 'react'
import { motion, useScroll, useSpring, useMotionValue, useMotionValueEvent, useMotionTemplate, useTransform } from 'framer-motion'
export default function Hero_Content() {
	
  
  return (
	<div className='hero-content'>
		<h1>Austin Cripe</h1>
		<p>Full stack developer</p>
	</div>
  )

}
