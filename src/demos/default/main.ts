import * as THREE from 'three'
import { scene } from 'three-kit'
import vertexShader from './vert.glsl'
import fragmentShader from './frag.glsl'

const geo = new THREE.BoxGeometry(1, 1, 1)
const mat = new THREE.ShaderMaterial({
  vertexShader,
  fragmentShader
})
const cube = new THREE.Mesh(geo, mat)
scene.add(cube)
