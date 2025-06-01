import React from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';
import { useRef } from 'react';

// Since we can't load actual GLTF models in this example,
// we'll create simple geometry representations instead
const FloatingObjects: React.FC = () => {
  const groupRef = useRef<Group>(null);
  
  useFrame((state) => {
    if (!groupRef.current) return;
    
    // Gentle floating movement based on time
    groupRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2;
    
    // Slight rotation
    groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
  });

  return (
    <group ref={groupRef}>
      {/* Book */}
      <mesh position={[-3, 0, 0]} rotation={[0.5, 0.5, 0]}>
        <boxGeometry args={[1.5, 0.2, 2]} />
        <meshStandardMaterial color="#4FC3F7" />
      </mesh>
      
      {/* Pencil */}
      <mesh position={[2, 1, -1]} rotation={[0.2, 0.5, 1.5]}>
        <cylinderGeometry args={[0.1, 0.1, 2, 32]} />
        <meshStandardMaterial color="#FFEB3B" />
        <mesh position={[0, 1, 0]}>
          <coneGeometry args={[0.1, 0.3, 32]} />
          <meshStandardMaterial color="#F5F5F5" />
        </mesh>
      </mesh>
      
      {/* Compass */}
      <mesh position={[1, -1, 2]} rotation={[0.5, 0, 0]}>
        <torusGeometry args={[0.7, 0.05, 16, 100]} />
        <meshStandardMaterial color="#FF80AB" />
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.03, 0.03, 1.4, 16]} />
          <meshStandardMaterial color="#F5F5F5" />
        </mesh>
      </mesh>
      
      {/* Eraser */}
      <mesh position={[-2, -1, -1]}>
        <boxGeometry args={[0.8, 0.4, 0.4]} />
        <meshStandardMaterial color="#F5F5F5" />
      </mesh>
      
      {/* Formula (represented as a thin panel) */}
      <mesh position={[0, 0.5, -3]} rotation={[0.2, 0.1, 0]}>
        <planeGeometry args={[2, 1]} />
        <meshStandardMaterial 
          color="#39FF14" 
          emissive="#39FF14"
          emissiveIntensity={0.5}
          transparent={true}
          opacity={0.7}
        />
      </mesh>
    </group>
  );
};

export default FloatingObjects;