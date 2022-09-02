import * as THREE from 'three'
import { scene } from 'three-kit'
import vertexShader from './vert.glsl'
import fragmentShader from './frag.glsl'

const colors = new Float32Array([
  1, 0, 0,
  0, 1, 0,
  0, 0, 1,
  0, 1, 1,
])

const size = 1
const geometry = new THREE.PlaneGeometry(size, size)
const material = new THREE.ShaderMaterial({
  uniforms: {
    color1: { value: { x: 1, y: 1, z: 0 } },
    color2: { value: { x: 0, y: 1, z: 1 } },
  },
  vertexShader,
  fragmentShader,
})

geometry.setAttribute('colors', new THREE.Float32BufferAttribute(colors, 3))

const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)
