import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Center, Bounds, ContactShadows } from "@react-three/drei";

useGLTF.preload("/models/jersey_baseball.glb");

function ShirtModel() {
  const { scene } = useGLTF("/models/jersey_baseball.glb");

  return (
    <Center>
      <primitive
        object={scene}
        rotation={[0, Math.PI / 4, 0]}
        position={[0, -0.6, 0]} // 🔥 move DOWN (important)
      />
    </Center>
  );
}

export default function ShirtViewer() {
  return (
    <div className="shirtViewer">
      <Canvas camera={{ position: [0, 0.5, 14], fov: 42 }}>
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[4, 5, 4]} intensity={1.2} />
        <directionalLight position={[-3, 2, -3]} intensity={0.4} />

        {/* 🔥 Bigger margin for tall object */}
        <Bounds fit clip observe margin={1.2}>
          <ShirtModel />
        </Bounds>

        <ContactShadows
          position={[0, -2.8, 0]}
          opacity={0.25}
          scale={12}
          blur={3}
          far={5}
        />

        <OrbitControls
          autoRotate
          autoRotateSpeed={1.3}
          enableZoom={false}
          enablePan={false}
        />
      </Canvas>
    </div>
  );
}