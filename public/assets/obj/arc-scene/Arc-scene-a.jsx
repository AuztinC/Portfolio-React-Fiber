/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 arc-scene-a.gltf 
*/

import React, { useEffect, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'

export default function ArcSceneA(props) {
  const { nodes, materials } = useGLTF('../assets/obj/arc-scene/arc-scene-a.gltf')
  const [hovered, setHovered] = useState(false)
  const [currentColorIdx, setCurrentColorIdx] = useState(0)
  const hoverColors = ['#600','#0f0','#00f']
  const hoverEmissive = ['#f06','#ff0','#0ff']
  // const hoverColors = ['#800','#0f0','#00f']
  // const hoverEmissive = ['#f08','#ff0','#0ff']
  useEffect(()=>{
    materials['Arc-Emit'].metalness = 0
    
  }, [])
  useEffect(()=>{
    if(currentColorIdx === 3) {
      setCurrentColorIdx(0)
    }
    materials['Arc-Emit'].color.set(hoverColors[currentColorIdx])
    materials['Arc-Emit'].emissive.set(hoverEmissive[currentColorIdx])
    
  }, [ currentColorIdx ])
  useEffect(()=>{
    if(!hovered){
      if(currentColorIdx === 0){
        materials['Arc-Emit'].color.set('#300')
        materials['Arc-Emit'].emissive.set('#f00')
      } 
      if(currentColorIdx === 1){
        materials['Arc-Emit'].color.set('#080')
        materials['Arc-Emit'].emissive.set('#df0')
      } 
      if(currentColorIdx === 2){
        materials['Arc-Emit'].color.set('#00f')
        materials['Arc-Emit'].emissive.set('#0df')
      } 
    } else {
      materials['Arc-Emit'].color.set(hoverColors[currentColorIdx])
      materials['Arc-Emit'].emissive.set(hoverEmissive[currentColorIdx])
    }
  }, [ hovered ])
  function handleClick() {
    setCurrentColorIdx(currentColorIdx + 1)
    
  }
  return (
    
    <group {...props} dispose={null}
    onPointerEnter={()=>setHovered(true)}
    onPointerLeave={()=>setHovered(false)}
    onClick={ handleClick }
    >
      <group position={[0, -0.25, 0]}>
        <mesh geometry={nodes.CUText001.geometry} material={materials['Arc-Base']} castShadow/>
        <mesh geometry={nodes.CUText001_1.geometry} material={materials['Arc-Emit']} material-toneMapped={false} material-emissiveIntensity={1} castShadow/>
      </group>
    </group>
  )
}

useGLTF.preload('../assets/obj/arc-scene/arc-scene-a.gltf') 
