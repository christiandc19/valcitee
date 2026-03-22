import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Center, Bounds, useGLTF } from "@react-three/drei";

const MODEL_URL = "https://valcitee.s3.us-east-1.amazonaws.com/jersey_baseball.glb";

useGLTF.preload(MODEL_URL);

function ShirtModel() {
  const { scene } = useGLTF(MODEL_URL);

  return (
    <Bounds fit clip observe margin={1.2}>
      <Center>
        <primitive object={scene} />
      </Center>
    </Bounds>
  );
}

export default function ShirtViewer() {
  return (
    <div style={{ width: "100%", height: "500px" }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 5, 5]} intensity={2} />
        <Suspense fallback={null}>
          <ShirtModel />
        </Suspense>
        <OrbitControls
          autoRotate
          autoRotateSpeed={2}
          enableZoom={false}
        />
      </Canvas>
    </div>
  );
}