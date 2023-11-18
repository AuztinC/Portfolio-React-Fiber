import * as THREE from 'three'
import React, { useRef, useState, useMemo, useEffect, Suspense } from 'react'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { EffectComposer, Vignette, Bloom, DepthOfField } from '@react-three/postprocessing'
import { KernelSize, Resolution  } from 'postprocessing'
import { Fairy } from '../assets/obj/fairy/Scene'
import Fantasy_Landscape from '../assets/obj/fantasy_landscape/Scene'

const allSpheres = []
function Sphere({ geometry, x, y, z, s }) {
  const ref = useRef()
  useFrame((state) => {
    ref.current.position.x = x + Math.sin((state.clock.getElapsedTime() * s) / 2)
    ref.current.position.y = y + Math.sin((state.clock.getElapsedTime() * s) / 2)
    ref.current.position.z = z + Math.sin((state.clock.getElapsedTime() * s) / 2)
  })
  return (
    <mesh ref={ref} position={[x, y, z]} scale={[s, s, s]} geometry={geometry}>
      <meshStandardMaterial color="orange" roughness={1} />
    </mesh>
  )
}

function RandomSpheres() {
  const [geometry] = useState(() => new THREE.SphereGeometry(1, 32, 32), [])
  const data = useMemo(() => {
    return new Array(35).fill().map((_, i) => ({
      x: Math.random() * 200-100,
      y: Math.random() * 60-30,
      z: Math.random() * 10 - 50,
      s: Math.random() + .3,
    }))
  }, [])
  allSpheres.push(data)
  return data.map((props, i) => <Sphere key={i} {...props} geometry={geometry} />)
}
// function RandomFairies() {
//   const [geometry] = useState(() => new THREE.SphereGeometry(1, 32, 32), [])
//   const data = useMemo(() => {
//     return new Array(10).fill().map((_, i) => ({
//       x: Math.random() * 20,
//       y: Math.random() * 10,
//       z: Math.random() * -15,
//       s: Math.random() + .5,
//     }))
//   }, [])
//   allSpheres.push(data)
//   return data.map((props, i) => <Fairy key={i} position={[props.x, props.y, props.z]} style={{ scale: props.s }}/>)
// }


function Main({ children }) {
  const scene = useRef()
  
  const { gl, camera } = useThree()
  useFrame(() => {
    gl.autoClear = false
    gl.clearDepth()
    gl.render(scene.current, camera)
  }, 2)
  return <scene ref={scene}>{children}</scene>
}

const Nod_Modes = () => {
  const ambientLight1 = useRef()
  const fairy = useRef()
  // if(!fairy.current) return null
  return (
    // 2, 1, 7
    <Canvas linear camera={{ position: [2, 1, 25], fov: 60, rotation: [.3 , 0, 0] }} shadows>
    <Main>
      <pointLight />
      <ambientLight ref={ ambientLight1 } intensity={1}/>
      <directionalLight position={[0, 10, 25]} intensity={7}/>
      <Suspense fallback={null}>
        {/* <Fantasy_Landscape scale={3}/> */}
        <Fairy position={[0, 25, -55]} scale={1}/>
        <Fairy position={[0, 0, 0]} scale={1}/>
        <Fairy position={[0, 0, -10]} scale={1}/>
        {/* <RandomSpheres /> */}
        {/* <RandomFairies /> */}
      </Suspense>
    </Main>
    
    <EffectComposer>
      <Bloom
        intensity={1} // The bloom intensity.
        blurPass={undefined} // A blur pass.
        kernelSize={KernelSize.LARGE} // blur kernel size
        luminanceThreshold={1} // luminance threshold. Raise this value to mask out darker elements in the scene.
        luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
        mipmapBlur={false} // Enables or disables mipmap blur.
        resolutionX={Resolution.AUTO_SIZE} // The horizontal resolution.
        resolutionY={Resolution.AUTO_SIZE} // The vertical resolution.
      />
      <Vignette eskil={false} offset={0.1} darkness={1.1} />  
      
      <DepthOfField
        focusDistance={1} // where to focus
        focalLength={0.01} // focal length
        bokehScale={1} // bokeh size
      />
    </EffectComposer>
  </Canvas>
  )
}
export default Nod_Modes