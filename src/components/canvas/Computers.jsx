import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

// 🔥 3D Model Component
const Computers = () => {
  const computer = useGLTF("./desktop_pc/scene.glb");

  return (
    <mesh>
      <hemisphereLight intensity={0.5} groundColor="black" />
      
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        intensity={0.6}
      />

      <primitive
        object={computer.scene}
        scale={0.7}
        position={[0, -3.2, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

// 🔥 MAIN CANVAS
const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handler = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // 🔥 MOBILE FIX: 3D REMOVE
  if (isMobile) {
    return (
    <div
  style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "100px", // navbar ke niche
    textAlign: "center",
  }}
>
 


  {/* 🔥 Image (Intro ke niche) */}
  <img
    src="/preview.png"
    alt="Computer Preview"
    style={{
      marginTop: "350px",   // 🔥 intro ke niche gap
      width: "85%",
      maxWidth: "500px",
      height: "300px",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    }
  }
  />  
</div>
    );
  }

  return (
    <Canvas
      frameloop="demand"
      shadows={false}
      dpr={[1, 1.5]} // 🔥 optimized
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        <Computers />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;

// 🔥 PRELOAD
useGLTF.preload("./desktop_pc/scene.glb");