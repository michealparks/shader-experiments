import * as THREE from 'three'
import { three } from 'trzy'
import vertexShader from './vert.glsl'
import fragmentShader from './frag.glsl'

const { scene } = three()

const geo = new THREE.BoxGeometry(1, 1, 1)
const mat = new THREE.ShaderMaterial({
  vertexShader,
  fragmentShader
})
const cube = new THREE.Mesh(geo, mat)
scene.add(cube)
