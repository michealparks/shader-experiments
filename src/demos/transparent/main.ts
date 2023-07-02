import * as THREE from 'three'
import { three } from 'trzy'
import vertexShader from './vert.glsl'
import fragmentShader from './frag.glsl'

const { scene, update } = three()

const material = new THREE.ShaderMaterial({
  vertexShader,
  fragmentShader,
  transparent: true,
})

const geometry = new THREE.CylinderGeometry(0.02, 0.02, 1, 16, 1, true)
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

update(() => {
  mesh.rotation.x += 0.01
  mesh.rotation.z += 0.01
})
