import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Center, Bounds, ContactShadows } from "@react-three/drei";

useGLTF.preload("/models/baseball_cap.glb");

function HatModel() {
  const { scene } = useGLTF("/models/baseball_cap.glb");

  return (
    <Center>
      <primitive
        object={scene}
        rotation={[0.08, Math.PI / 4, 0]}
        position={[0, -0.15, 0]}
      />
    </Center>
  );
}

export default function HatViewer() {
  return (
    <div className="hatViewer">
        <Canvas camera={{ position: [0, 0.2, 12.5], fov: 42 }}>
        <ambientLight intensity={0.45} />
        <directionalLight position={[4, 5, 4]} intensity={1.4} />
        <directionalLight position={[-3, 2, -3]} intensity={0.45} />
        <spotLight
          position={[0, 6, 4]}
          angle={0.35}
          penumbra={1}
          intensity={1.2}
        />

        <Bounds fit clip observe margin={1}>
          <HatModel />
        </Bounds>

        <ContactShadows
          position={[0, -1.8, 0]}
          opacity={0.35}
          scale={10}
          blur={2.5}
          far={4}
        />

        <OrbitControls
          autoRotate
          autoRotateSpeed={2}
          enableZoom={false}
          enablePan={false}
        />
      </Canvas>
    </div>
  );
}