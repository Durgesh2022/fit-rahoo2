"use client";

import React, { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { AnimationMixer, Group } from "three";

import CanvasLoader from "../Loader";

interface GLTFResult extends ReturnType<typeof useGLTF> {
  scene: Group;
  animations: THREE.AnimationClip[];
}

const Earth: React.FC = () => {
  const { scene, animations } = useGLTF("./muscular_bodybuilder_boxing_fighter copy/scene.gltf") as GLTFResult;

  const mixer = useRef<AnimationMixer | null>(null);

  useEffect(() => {
    if (animations.length) {
      mixer.current = new AnimationMixer(scene);
      animations.forEach((clip) => {
        const action = mixer.current!.clipAction(clip);
        action.play();
      });
    }
  }, [animations, scene]);

  useFrame((_, delta) => {
    mixer.current?.update(delta);
  });

  return <primitive object={scene} scale={[5, 4, 5]} position-y={0} rotation-y={0} />;
};

const EarthCanvas2: React.FC = () => {
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
        // position: [6, 3, 8],
                position: [-4, 4, 8],

      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={0}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        {/* Lighting */}
        <ambientLight intensity={1.5} />
        <directionalLight
          intensity={2}
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

export default EarthCanvas2;

// Necessary for static loading
useGLTF.preload("./muscular_bodybuilder_boxing_fighter copy/scene.gltf");
