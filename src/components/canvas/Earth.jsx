import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

// 🌍 EARTH MODEL
const Earth = ({ isMobile }) => {
  const earth = useGLTF("./planet/scene.glb");

  return (
    <primitive
      object={earth.scene}
      scale={isMobile ? 2 : 2.5}
      position-y={0}
      rotation-y={0}
    />
  );
};

// 🌍 MAIN CANVAS
const EarthCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    setIsMobile(mq.matches);

    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);

    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows={false} // 🔥 mobile safe
      dpr={isMobile ? 1 : [1, 2]} // 🔥 main fix
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
          autoRotate={!isMobile} // 🔥 mobile me band
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        <Earth isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default EarthCanvas;

// 🔥 PRELOAD
useGLTF.preload("./planet/scene.glb");