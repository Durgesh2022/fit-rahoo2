import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useEffect, useRef } from "react";

import CanvasLoader from "../Loader";
import { AnimationMixer } from "three";

const Earth = () => {
  const earth = useGLTF("./old_punching_bag/scene.gltf");
  const mixer = useRef();

  useEffect(() => {
    if (earth.animations.length) {
      mixer.current = new AnimationMixer(earth.scene);
      earth.animations.forEach((clip) => {
        const action = mixer.current.clipAction(clip);
        action.play();
      });
    }
  }, [earth]);

  useFrame((_, delta) => {
    mixer.current?.update(delta);
  });

  return (
    <primitive object={earth.scene} scale={[-2, 2, 3]} position={[0, -3, 0]} />
  );
};

const GymCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
       <OrbitControls
  enableZoom={false}
  enableRotate={false}
  enablePan={false}
/>

        {/* Add Lighting */}
        <ambientLight intensity={1.5} />
        <directionalLight
          intensity={0}
          position={[5, 5, 5]}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <pointLight intensity={1.7} position={[-5, -5, -5]} />

        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default GymCanvas;