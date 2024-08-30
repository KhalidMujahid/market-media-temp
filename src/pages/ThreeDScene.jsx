// src/ThreeDScene.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box } from '@react-three/drei';

const ThreeDScene = () => {
  return (
    <Canvas style={{ height: '400px' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Box args={[1, 1, 1]} position={[-1.5, 0, 0]}>
        <meshStandardMaterial attach="material" color="orange" />
      </Box>
      <Box args={[1, 1, 1]} position={[1.5, 0, 0]}>
        <meshStandardMaterial attach="material" color="blue" />
      </Box>
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeDScene;
