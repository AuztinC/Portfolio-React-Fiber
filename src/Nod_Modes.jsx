// import * as THREE from 'three'
import React, { useRef, useState, useMemo, useEffect, Suspense, useLayoutEffect } from 'react'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
// import { EffectComposer, Vignette, Bloom, DepthOfField, SelectiveBloom, Select, Selection  } from '@react-three/postprocessing'
// import { KernelSize, Resolution, BlurPass, Resizer  } from 'postprocessing'
import { Clone, OrbitControls } from '@react-three/drei'
// import SpaceDust from './SpaceDust'
import ArcSceneBackdrop from '/public/assets/obj/arc-scene/Arc-scene-backdrop'
import ArcSceneA from '/public/assets/obj/arc-scene/Arc-scene-a'
import ArcSceneR from '/public/assets/obj/arc-scene/Arc-scene-r'
import ArcSceneC from '/public/assets/obj/arc-scene/Arc-scene-c'
// import Plant from '/public/assets/obj/plant_in_pot/Scene'
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
  
  const Aimages = ["url('/assets/images/2d/a/a-red.png')", "url('/assets/images/2d/a/a-green.png')", "url('/assets/images/2d/a/a-blue.png')"]
  const Rimages = ["url('/assets/images/2d/r/r-red.png')", "url('/assets/images/2d/r/r-green.png')", "url('/assets/images/2d/r/r-blue.png')"]
  const Cimages = ["url('/assets/images/2d/c/c-red.png')", "url('/assets/images/2d/c/c-green.png')", "url('/assets/images/2d/c/c-blue.png')"]
  
  const ltrA = useRef()
  const ltrR = useRef()
  const ltrC = useRef()
  const [aIdx, setAIdx] = useState(Math.round(Math.random() * 3))
  const [rIdx, setRIdx] = useState(Math.round(Math.random() * 3))
  const [cIdx, setCIdx] = useState(Math.round(Math.random() * 3))
  
  useEffect(()=>{ 
    
    
  }, [])
  useEffect(()=>{ 
    // console.log(aIdx)
  }, [aIdx])
  
  const heroCanvas = useRef()
  useEffect(()=>{
    if(window.innerWidth <= 950){
      // canvasRef.current.style.display = 'none'
      heroCanvas.current.style.backgroundImage = "url('/assets/images/2d/arc-white.png')"
    } else {
      // canvasRef.current.style.display = 'block'
    }
  }, [windowSize])
  
  let letterTimer = null
  useEffect(()=>{
    if(letterTimer) clearTimeout(letterTimer)
    letterTimer = setTimeout(()=>{
      // console.log('in letter timer')
      const randomLetter = Math.round(Math.random() * 3)
      switch (randomLetter) {
        case 0:
          handleLetterA()
          break;
        case 1:
          handleLetterR()
          break;
        case 2:
          handleLetterC()
          break;
        default:
          break;
      }
    }, Math.floor(Math.random() * (10000 - 5000 + 1) + 5000))
  }, [aIdx, rIdx, cIdx])
  
  function handleLetterA(){
    setAIdx(aIdx + 1)
    if(aIdx === 3) setAIdx(0)
  }
  function handleLetterR(){
    setRIdx(rIdx + 1)
    if(rIdx === 3) setRIdx(0)
  }
  function handleLetterC(){
    setCIdx(cIdx + 1)
    if(cIdx === 3) setCIdx(0)
  }
  return (
    // 2, 1, 7
    
    <div className='hero-canvas' ref={ heroCanvas }>
      
      {window.innerWidth <= 950 ? 
        <>
          <div className='letter-image' ref={ ltrA } style={{ backgroundImage: Aimages[aIdx]}}></div>
          <div className='letter-image' ref={ ltrR } style={{ backgroundImage: Rimages[rIdx]}}></div>
          <div className='letter-image' ref={ ltrC } style={{ backgroundImage: Cimages[cIdx]}}></div>
          <div className='dummy-letter a' onClick={ handleLetterA }></div>
          <div className='dummy-letter r' onClick={ handleLetterR }></div>
          <div className='dummy-letter c' onClick={ handleLetterC }></div>
        </>
        
      : 
        <Canvas linear camera={{ position: [0, 0, 20], fov: 10 }} rotation={[0,0,0]} shadows >
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
        
        {/* <OrbitControls /> */}
      </Canvas>
    }
  </div>
  )
}
export default Nod_Modes