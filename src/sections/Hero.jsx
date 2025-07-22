import React, { Suspense } from 'react'
import HeroText from '../components/HeroText'
import ParallaxBackground from '../components/ParallaxBackground'
import { Canvas, useFrame } from '@react-three/fiber'
import { Astronaut } from '../components/Astronaut'
import { OrbitControls, Float } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive'
import { easing } from 'maath'
import Loader from '../components/Loader'


const Hero = () => {

  const isMobile = useMediaQuery({ maxWidth: 853 });

  return (
    <section 
    id="hero" // 🔗 This enables scroll-to-section via href="#hero 
    className='flex items-start justify-center md:items-start md:justify-start
     min-h-screen overflow-hidden c-space'>
       <HeroText />
       <ParallaxBackground />
       <figure 
       className='absolute inset-0'
       style={{ width : '100vw', height: '100vh'}}
       >
        <Canvas camera={{ position: [0, 1, 3]}}>
          <Suspense fallback={<Loader />}>
            <Float >
              <Astronaut 
                scale={isMobile && 0.23}
                position={isMobile && [0, -1.5, 0]}
              />
            </Float>                                    {/* for scale and position above ...if it is under 0 to 853 pixels then use this cordinates for the 3d model and if it is above 853 pixels then use different or bigger cordinates which are there in astronaut.jsx file */}

            <OrbitControls />{/* this is used for dragging the 3d model that is astronaut*/}
            <Rig />
          </Suspense>
        </Canvas>
       </figure>
    </section>
  )
}

function Rig() {// when we hover on 3d model ,that model will show effect 
  return useFrame((state, delta) => {
    easing.damp3(state.camera.position, 
      [state.mouse.x / 10,1 + state.mouse.y / 10,3,],
    0.5,
  delta
    );
  });
}

export default Hero
