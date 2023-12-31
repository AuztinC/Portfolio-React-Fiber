/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 arc-scene-r.gltf 
*/

import React, { useRef, useEffect, useState } from 'react'
import { useGLTF } from '@react-three/drei'

export default function ArcSceneR(props) {
  const { nodes, materials } = useGLTF('../assets/obj/arc-scene/arc-scene-r.gltf')
  const [hovered, setHovered] = useState(false)
  const [currentColorIdx, setCurrentColorIdx] = useState(1)
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
    setCurrentColorIdx(props.rIdx)
    // console.log(props.aIdx)
  }, [props.rIdx])
  useEffect(()=>{
    if(!hovered){
      materials['Arc-Emit'].color.set(colors[currentColorIdx])
      materials['Arc-Emit'].emissive.set(emissive[currentColorIdx])
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
        <mesh geometry={nodes.CUText004.geometry} material={materials['Arc-Base']} castShadow/>
        <mesh geometry={nodes.CUText004_1.geometry} material={materials['Arc-Emit']} material-toneMapped={false} material-emissiveIntensity={1} castShadow/>
      </group>
    </group>
  )
}

useGLTF.preload('../assets/obj/arc-scene/arc-scene-r.gltf')
