import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingGeometryProps {
  position: [number, number, number];
  color?: string;
  size?: number;
  opacity?: number;
}

export function FloatingGeometry({ position, color = '#4ade80', size = 1, opacity = 0.3 }: FloatingGeometryProps) {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.getElapsedTime() * 0.3;
      mesh.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={mesh} position={position} scale={size}>
        <icosahedronGeometry args={[1, 4]} />
        <MeshDistortMaterial color={color} transparent opacity={opacity} distort={0.4} speed={2} roughness={0.1} />
      </mesh>
    </Float>
  );
}
