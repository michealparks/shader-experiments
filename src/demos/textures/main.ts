import * as THREE from 'three'
import { scene } from 'three-kit'
import vertexShader from './vert.glsl'
import fragmentShader from './frag.glsl'

const size = 1
const geometry = new THREE.PlaneGeometry(size, size)
const material = new THREE.ShaderMaterial({
  vertexShader,
  fragmentShader,
})

const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

