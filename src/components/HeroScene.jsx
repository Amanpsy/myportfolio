import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Float, Lightformer } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { Planet } from "./planet";

const HeroScene = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });

  return (
    <Canvas
      dpr={[1, 1.5]}
      shadows
      camera={{ position: [0, 0, -10], fov: 17.5, near: 1, far: 20 }}
    >
      <ambientLight intensity={0.5} />
      <Environment resolution={256}>
        <group rotation={[-Math.PI / 3, 4, 1]}>
          <Lightformer
            form="circle"
            intensity={2}
            position={[0, 5, -9]}
            scale={10}
          />
          <Lightformer
            form="circle"
            intensity={2}
            position={[0, 3, 1]}
            scale={10}
          />
          <Lightformer
            form="circle"
            intensity={2}
            position={[-5, -1, -1]}
            scale={10}
          />
          <Lightformer
            form="circle"
            intensity={2}
            position={[10, 1, 0]}
            scale={16}
          />
        </group>
      </Environment>
      <Suspense fallback={null}>
        <Float speed={0.5}>
          <Planet scale={isMobile ? 0.7 : 1} />
        </Float>
      </Suspense>
    </Canvas>
  );
};

export default HeroScene;
