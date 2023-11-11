import React, { useState, useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function HTML_Logo(props) {
  const [isHovered, setHover] = useState(false)
  const { nodes, materials } = useGLTF('../assets/obj/html_logo/scene.gltf')
  const gltf = useGLTF('../assets/obj/html_logo/scene.gltf')

  
  gltf.scene.traverse( function( node ) {
    if ( node.isMesh ) { node.castShadow = true; }
  } );
  
 
  
  return (
      <group {...props} 
      dispose={null} 
      onPointerEnter={()=>setHover(true)} 
      onPointerLeave={()=>setHover(false)}
    >
      <group rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={isHovered ? [1.1, 1.1, 1.1] : [1, 1, 1]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[24.052, 117.48, 10.526]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <mesh geometry={nodes.Object_6.geometry} material={materials['Material.010']} castShadow/>
            <mesh geometry={nodes.Object_7.geometry} material={materials['Material.011']} castShadow/>
          </group>
          <mesh geometry={nodes.Object_4.geometry} material={materials['Material.009']} position={[18.962, 117.48, 10.526]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} castShadow/>
          <mesh geometry={nodes.Object_9.geometry} material={materials['Material.012']} position={[42.712, 209.044, 23.565]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={100} castShadow/>
        </group>
      </group>
      </group>
    
  )
}

useGLTF.preload('../assets/obj/html_logo/scene.gltf')
