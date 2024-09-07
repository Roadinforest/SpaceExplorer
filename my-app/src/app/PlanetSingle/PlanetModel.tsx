'use client'
import { useRef, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";

export function PlanetModel() {
  const { scene } = useGLTF('/models/Earth.glb')
  const meshRef = useRef<THREE.Group>()
  const { camera } = useThree()

  useEffect(() => {
    if (meshRef.current) {
      // 创建一个包围盒来计算模型的尺寸和中心
      const box = new THREE.Box3().setFromObject(meshRef.current)
      const size = box.getSize(new THREE.Vector3())
      const center = box.getCenter(new THREE.Vector3())

      // 计算模型的最大尺寸
      const maxDim = Math.max(size.x, size.y, size.z)

      // 计算相机的Z位置
      let cameraZ
      if ('fov' in camera) {
        // 对于透视相机
        const fov = camera.fov * (Math.PI / 180) // 将角度转换为弧度
        // 计算基础相机距离
        const baseCameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2))
        // 将相机拉远，这里使用1.5倍的距离，可以根据需要调整
        cameraZ = baseCameraZ * 1.5
      } else {
        // 对于正交相机
        // 将相机拉远，这里使用3倍的模型尺寸，可以根据需要调整
        cameraZ = maxDim * 3
      }

      // 设置相机位置
      camera.position.set(center.x, center.y, center.z + cameraZ)
      camera.updateProjectionMatrix()

      // 更新控制器的目标到模型中心
      const controls = camera.userData.controls
      if (controls) {
        controls.target.copy(center)
        controls.update()
      }
    }
  }, [scene, camera])

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5
    }
  })

  return (
    <>
      {/* 添加环境光 */}
      <ambientLight intensity={0.5} />
      
      {/* 添加平行光 */}
      <directionalLight position={[5, 5, 5]} intensity={1} />
      
      {/* 添加点光源 */}
      <pointLight position={[-5, -5, -5]} intensity={0.5} />

      <primitive 
        ref={meshRef}
        object={scene} 
        scale={1} // 使用原始大小，让相机自动调整
        position={[0, 0, 0]}
      />
    </>
  )
}
export default function PlanetModel3D() {
  return (
    <div style={{ height: 300, width: "100%" }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <PlanetModel />
        <OrbitControls enableZoom={true} />
        <Environment preset="sunset" />
      </Canvas>
    </div>
  );
}