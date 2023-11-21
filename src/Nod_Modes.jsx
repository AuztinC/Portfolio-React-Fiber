import * as THREE from 'three'
import React, { useRef, useState, useMemo, useEffect, Suspense, useLayoutEffect } from 'react'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { EffectComposer, Vignette, Bloom, DepthOfField, SelectiveBloom, Select, Selection  } from '@react-three/postprocessing'
import { KernelSize, Resolution, BlurPass, Resizer  } from 'postprocessing'
import { Clone, OrbitControls } from '@react-three/drei'
import SpaceDust from './SpaceDust'
import ArcSceneBackdrop from '/public/assets/obj/arc-scene/Arc-scene-backdrop'
import ArcSceneA from '/public/assets/obj/arc-scene/Arc-scene-a'
import ArcSceneR from '/public/assets/obj/arc-scene/Arc-scene-r'
import ArcSceneC from '/public/assets/obj/arc-scene/Arc-scene-c'
import Plant from '/public/assets/obj/plant_in_pot/Scene'
// import LightBulb from '../assets/obj/light_bulb/Scene'

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
};

const cursor = {
  x: 0,
  y: 0
};
const Camera = ({ windowSize }) => {
  const { camera } = useThree()
  const cameraRef = useRef(camera);
  let lookAtX = window.innerWidth <= 900 ? 0 : -1
  let lookAtY = window.innerWidth <= 900 ? 1.4 : 1
  var mouseTolerance = .3;
  useEffect(()=>{
    window.addEventListener("mousemove", (event)=>{
      cursor.x = event.clientX / sizes.width - 0.5;
      cursor.y = event.clientY / sizes.height - -8;
    });
    camera.rotateY(60);
  }, [])
  useEffect(()=>{
    if(window.innerWidth <= 900){
      lookAtX = 0
      lookAtY = 1.4
    } else {
      lookAtX = -1
      lookAtY = 1
    }
    // console.log(lookAtX)
  }, [ windowSize ])
  useFrame(() => {
    if (cameraRef.current) {
      cameraRef.current.position.x = -cursor.x * mouseTolerance;
      cameraRef.current.position.y = cursor.y * mouseTolerance;
      cameraRef.current.lookAt(lookAtX, lookAtY, 0)
    }
  });
  
  return (
    null
  );
};

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

const Nod_Modes = ({ windowSize }) => {
  // const fbx = useLoader(FBXLoader, '../assets/obj/arc-scene/arc-scene.fbx')
  
  const letterA = useRef()
  const ambientLight1 = useRef()
  const directionalLight1 = useRef()
  

  return (
    // 2, 1, 7
    <Canvas linear camera={{ position: [0, 0, 20], fov: 10 }} rotation={[0,0,0]} shadows>
      <Camera windowSize={ windowSize }/>
    <Main>
      <mesh position={[-1.9, .8, 0]}>
        <pointLight intensity={3} position={[0, 0, 0]}/>
        <pointLight intensity={1} position={[0, 0, .3]} />
        {/* <LightBulb scale={ 0.1 } position={[0, 0, 0]} /> */}
      </mesh>
      <ambientLight ref={ ambientLight1 } intensity={2}/>
      <directionalLight ref={ directionalLight1 } position={[0, 10, 25]} intensity={4} castShadow/>
      <Suspense fallback={null}>
        <mesh rotation={[.2, 0, 0]} >
          <ArcSceneBackdrop rotation={[-Math.PI/2, 0, 0]}/>
            <mesh ref={ letterA }>
              <ArcSceneA rotation={[-Math.PI/2, 0, 0]}/>
            </mesh>
            <ArcSceneR rotation={[-Math.PI/2, 0, 0]}/>
            <ArcSceneC rotation={[-Math.PI/2, 0, 0]}/>
            {/* <Plant scale={.01} rotation={[0, -Math.PI/1.5, 0]} position={[4, 0, 0]}/> */}
        </mesh>
        {/* <SpaceDust count={2500} /> */}
      </Suspense>
    </Main>
    
    <EffectComposer>
      {/* <Bloom
        // renderOrder={1}
        intensity={1} // The bloom intensity.
        blurPass={undefined} // A blur pass.
        kernelSize={KernelSize.LARGE} // blur kernel size
        luminanceThreshold={0.3} // luminance threshold. Raise this value to mask out darker elements in the scene.
        luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
        mipmapBlur={true} // Enables or disables mipmap blur.
        resolutionX={Resolution.AUTO_SIZE} // The horizontal resolution.
        resolutionY={Resolution.AUTO_SIZE} // The vertical resolution.
      /> */}
      {/* <SelectiveBloom
        lights={[ambientLight1 ]} // ⚠️ REQUIRED! all relevant lights
        selection={[letterA]} // selection of objects that will have bloom effect
        selectionLayer={1} // selection layer
        intensity={1.0} // The bloom intensity.
        blurPass={undefined} // A blur pass.
        width={Resizer.AUTO_SIZE} // render width
        height={Resizer.AUTO_SIZE} // render height
        kernelSize={KernelSize.LARGE} // blur kernel size
        luminanceThreshold={0.9} // luminance threshold. Raise this value to mask out darker elements in the scene.
        luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
      /> */}
      
      <Vignette eskil={false} offset={0.1} darkness={1.1} />  
      
      <DepthOfField
        focusDistance={1} // where to focus
        focalLength={0.01} // focal length
        bokehScale={1} // bokeh size
      />
    </EffectComposer>
    {/* <OrbitControls /> */}
  </Canvas>
  )
}
export default Nod_Modes