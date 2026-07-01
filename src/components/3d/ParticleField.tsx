import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import type { Theme } from '../../hooks/useTheme';

interface ParticleFieldProps {
  count?: number;
  theme?: Theme;
}

export function ParticleField({ count = 100, theme = 'dark' }: ParticleFieldProps) {
  const points = useRef<THREE.Points>(null);
  const isDark = theme === 'dark';

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return positions;
  }, [count]);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      points.current.rotation.x = state.clock.getElapsedTime() * 0.03;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={particles} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color={isDark ? '#60a5fa' : '#0ea5e9'}
        transparent
        opacity={isDark ? 0.4 : 0.2}
        sizeAttenuation
      />
    </points>
  );
}
