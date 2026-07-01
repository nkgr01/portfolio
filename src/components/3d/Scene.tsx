import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Stars } from './Stars';
import { FloatingGeometry } from './FloatingGeometry';
import { ParticleField } from './ParticleField';
import type { Theme } from '../../hooks/useTheme';

interface SceneProps {
  theme: Theme;
}

export function Scene({ theme }: SceneProps) {
  const isDark = theme === 'dark';

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }} dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
        <Suspense fallback={null}>
          <ambientLight intensity={isDark ? 0.5 : 0.8} />
          <pointLight position={[10, 10, 10]} intensity={isDark ? 1 : 0.6} color={isDark ? '#4ade80' : '#16a34a'} />
          <pointLight position={[-10, -10, -10]} intensity={isDark ? 0.5 : 0.3} color={isDark ? '#60a5fa' : '#0ea5e9'} />
          {isDark && <Stars count={3000} />}
          <ParticleField count={80} theme={theme} />
          <FloatingGeometry position={[-4, 2, -2]} color={isDark ? '#4ade80' : '#16a34a'} size={0.8} opacity={isDark ? 0.3 : 0.12} />
          <FloatingGeometry position={[4, -1, -3]} color={isDark ? '#60a5fa' : '#0ea5e9'} size={0.6} opacity={isDark ? 0.3 : 0.1} />
          <FloatingGeometry position={[2, 3, -4]} color={isDark ? '#e879f9' : '#a855f7'} size={0.5} opacity={isDark ? 0.3 : 0.08} />
          <FloatingGeometry position={[-3, -2, -5]} color={isDark ? '#fb923c' : '#f97316'} size={0.7} opacity={isDark ? 0.3 : 0.1} />
        </Suspense>
      </Canvas>
    </div>
  );
}
