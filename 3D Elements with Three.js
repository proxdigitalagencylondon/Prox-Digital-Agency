import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';

const ThreeDScene = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <Float speed={2} rotationIntensity={0.5}>
        <BoxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="#6C63FF" metalness={0.5} roughness={0.2} />
      </Float>
      <OrbitControls />
    </Canvas>
  );
};
