import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Stars } from './Stars';
import { FloatingGeometry } from './FloatingGeometry';
import { ParticleField } from './ParticleField';

export function Scene() {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }} dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#4ade80" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#60a5fa" />
          <Stars count={3000} />
          <ParticleField count={80} />
          <FloatingGeometry position={[-4, 2, -2]} color="#4ade80" size={0.8} />
          <FloatingGeometry position={[4, -1, -3]} color="#60a5fa" size={0.6} />
          <FloatingGeometry position={[2, 3, -4]} color="#e879f9" size={0.5} />
          <FloatingGeometry position={[-3, -2, -5]} color="#fb923c" size={0.7} />
        </Suspense>
      </Canvas>
    </div>
  );
}
