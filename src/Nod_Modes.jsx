import React from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'


const Scene = () => {
	const cluster = Array(20).fill()
	const randomLocation = Math.round(Math.random()*25)
	return (
	<>
		{
			cluster.map((el, i) => {
				return (
				<mesh position={[randomLocation, 0, 0]} key={i}>
					<sphereGeometry args={[1, 16, 16]} />
					<meshLambertMaterial color='red' roughness={.1} metalness={.1}/>
				</mesh>
				)
			})
		}
	</>
		
	)
}


function Nod_Modes() {
  return (
	<Canvas camera={{ position: [0, 0, 10]}} shadows>
		<ambientLight intensity={1}/>
		<pointLight position={[0, 0, 10]} intensity={1000}/>
		<Scene />
		<OrbitControls />
	</Canvas>
  )
}

export default Nod_Modes