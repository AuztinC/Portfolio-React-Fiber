/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 arc-scene-c.gltf 
*/

import React, { useRef, useEffect, useState } from 'react'
import { useGLTF } from '@react-three/drei'

export default function ArcSceneC(props) {
  const { nodes, materials } = useGLTF('../assets/obj/arc-scene/arc-scene-c.gltf')
  const [hovered, setHovered] = useState(false)
  const [currentColorIdx, setCurrentColorIdx] = useState(2)
  const hoverColors = ['#600','#0f0','#00f']
  const hoverEmissive = ['#f06','#ff0','#0ff']
  const colors = ['#300','#080','#00f']
  const emissive = ['#f00','#df0','#0df']
  useEffect(()=>{
    materials['Arc-Emit'].metalness = 0
  }, [])
  useEffect(()=>{
    if(currentColorIdx === 3) {
      setCurrentColorIdx(0)
    }
    if(hovered){
      materials['Arc-Emit'].color.set(hoverColors[currentColorIdx])
      materials['Arc-Emit'].emissive.set(hoverEmissive[currentColorIdx])
    } else {
      materials['Arc-Emit'].color.set(colors[currentColorIdx])
      materials['Arc-Emit'].emissive.set(emissive[currentColorIdx])
    }
  }, [ currentColorIdx ])
  useEffect(()=>{
    setCurrentColorIdx(props.cIdx)
    // console.log(props.aIdx)
  }, [props.cIdx])
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
        <mesh geometry={nodes.CUText003.geometry} material={materials['Arc-Base']} castShadow/>
        <mesh geometry={nodes.CUText003_1.geometry} material={materials['Arc-Emit']} material-toneMapped={false} material-emissiveIntensity={1} castShadow/>
      </group>
    </group>
  )
}

useGLTF.preload('../assets/obj/arc-scene/arc-scene-c.gltf')
