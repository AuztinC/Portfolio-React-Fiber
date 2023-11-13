import { Suspense, useRef, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import CSS_Logo from '../assets/obj/css_logo/CSS_Logo'
import  HTML_Logo  from '../assets/obj/html_logo/Scene'
import JS_Logo from '../assets/obj/javascript_1/Scene'
import React_Logo from '../assets/obj/react_logo_circle/Scene'
import { MeshDistortMaterial } from '@react-three/drei'
import { OrbitControls } from '@react-three/drei'
import { useSpring, animated } from '@react-spring/web'
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
};

const cursor = {
  x: 0,
  y: 0
};

const Camera = () => {
  const { camera } = useThree()
  const cameraRef = useRef(camera);
  var mouseTolerance = 5;
  useEffect(()=>{
    window.addEventListener("mousemove", (event)=>{
      cursor.x = event.clientX / sizes.width - 0.5;
      cursor.y = event.clientY / sizes.height - 0.5;
    });
    
  }, [])
  
  useFrame(() => {
    if (cameraRef.current) {
      cameraRef.current.position.x = -cursor.x * mouseTolerance;
      cameraRef.current.position.y = cursor.y * mouseTolerance;
      cameraRef.current.lookAt(0, 0, 10)
    }
  });
  
  return (
    null
  );
};

function JS_Canvas() {
  // const AnimatedMeshDistortMaterial = animated(MeshDistortMaterial)
  const [selectedLogo, setSelectedLogo] = useState(null)
  
  const [props, api] = useSpring(()=>({
    from: { rotate  : [0] }
}))
const handleClick =(ev)=>{
  console.log("logo clicked")
  setSelectedLogo(ev.eventObject)
  api.start({
    from: { rotation: [0] },
    to: { rotation: [1] }
  })
}
useEffect(()=>{
  
}, [selectedLogo])

  return (
    <div id="js-canvas">
      <Canvas camera={{ fov: 75, position: [0,0, 80]}} shadows>
          <Camera />
          <ambientLight color="#DEF" intensity={.4} />
          <pointLight // low down light left
            position={[-15, -10, 50 ]}
            color="#FFE" 
            intensity={ 2000 }
            shadow-mapSize-height={2048} 
            shadow-mapSize-width={2048}
          />
          <pointLight // low down light right
            position={[15, -10, 50 ]}
            color="#FFE" 
            intensity={ 2000 }
            shadow-mapSize-height={2048} 
            shadow-mapSize-width={2048}
          />
          <spotLight // up high light 
            castShadow 
            position={[0, 10, 60 ]}
            color="#FFE" 
            intensity={ 5000 }
            shadow-mapSize-height={2048} 
            shadow-mapSize-width={2048}
          />
          <Suspense fallback={ null }>
            <JS_Logo position={[0, 0, 1]} scale={5} />
            <CSS_Logo position={[20, -5, 10]} scale={0.13} />
            <HTML_Logo position={[-20, -5, 10]} scale={0.13} onClick={handleClick} style={{ rotate: '360deg'}}/>
            <React_Logo position={[-25, -10, 10]} scale={5} />
          </Suspense>
          {/* <OrbitControls/> */}
      </Canvas>
        
    </div>
  )
}

export default JS_Canvas