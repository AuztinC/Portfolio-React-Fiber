
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
export default function React_Logo(props) {
  const { nodes, materials } = useGLTF('../assets/obj/react_logo_circle/scene.gltf')
  const logo = useRef()
  useFrame((_, delta)=>{
    logo.current.rotation.z += 0.3 * delta
  })
  
  return (
    <group {...props} dispose={null} ref={ logo }>
      <group rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh geometry={nodes['React-Logo_Material002_0'].geometry} material={materials['Material.002']} position={[0, 7.935, 0]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={[39.166, 39.166, 52.734]} castShadow/>
          <mesh geometry={nodes.Backdrop_Material001_0.geometry} material={materials['Material.001']} position={[-17.091, 7.935, 0]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={[247.854, 247.854, 52.734]} castShadow/>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('../assets/obj/react_logo_circle/scene.gltf')
