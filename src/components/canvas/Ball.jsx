import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

// 🔥 BALL COMPONENT
const Ball = ({ imgUrl, isMobile }) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <Float
      speed={isMobile ? 1 : 1.75}
      rotationIntensity={isMobile ? 0.5 : 1}
      floatIntensity={isMobile ? 1 : 2}
    >
      <ambientLight intensity={0.3} />

      {!isMobile && (
        <directionalLight position={[0, 0, 0.05]} />
      )}

      <mesh scale={isMobile ? 2 : 2.75}>
        <icosahedronGeometry args={[1, isMobile ? 0 : 1]} />

        <meshStandardMaterial
          color="#fff8eb"
          flatShading
        />

        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={isMobile ? 0.8 : 1}
          map={decal}
        />
      </mesh>
    </Float>
  );
};

// 🔥 MAIN CANVAS
const BallCanvas = ({ icon }) => {
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
      dpr={isMobile ? 1 : [1, 2]} // 🔥 main fix
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />

        <Ball imgUrl={icon} isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;