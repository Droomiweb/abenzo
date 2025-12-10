'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { useRef, useMemo } from 'react';

function ParticleSphere(props) {
  const ref = useRef();

  const sphere = useMemo(() => {
    // INCREASED: 5000 particles for a denser look
    const count = 5000;
    const positions = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      // INCREASED: Multiplier changed from 1.8 to 4.5
      // This makes the sphere huge, covering the whole screen
      const r = 4.5 * Math.cbrt(Math.random()); 
      const theta = Math.random() * 2 * Math.PI; 
      const phi = Math.acos(2 * Math.random() - 1); 
      
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }
    return positions;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      // Rotation speed
      ref.current.rotation.x -= delta / 15;
      ref.current.rotation.y -= delta / 20;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#008278"
          size={0.012} // Increased size slightly for visibility
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.8}
        />
      </Points>
    </group>
  );
}

export default function Scene() {
  return (
    <div className="absolute inset-0 z-0 h-full w-full">
      {/* Adjusted camera Z position to 3.5 to view the larger sphere properly */}
      <Canvas camera={{ position: [0, 0, 3.5] }} gl={{ antialias: false }}>
        <ambientLight intensity={0.5} />
        <ParticleSphere />
      </Canvas>
    </div>
  );
}