import React, { useState } from 'react'
import { useGLTF } from '@react-three/drei'

export default function JS_Logo(props) {

  const { nodes, materials } = useGLTF('../assets/obj/javascript_1/scene.gltf')
  // const gltf = useGLTF('../assets/obj/javascript_1/scene.gltf')
  // gltf.scene.traverse( function( node ) {
    
  //   if ( node.isMesh ) { node.receiveShadow = true; }
  //   if ( node.isMesh ) { node.castShadow = true; }
    
  // } );
  return (
    <group {...props} dispose={null} 
    >
      <mesh geometry={nodes.Object_2.geometry} material={materials.mat_3220964} rotation-z={[1.575]} receiveShadow />
    </group>
  )
}

useGLTF.preload('../assets/obj/javascript_1/scene.gltf')
