import * as THREE from 'three'
import { three } from 'trzy'
import vertexShader from './vert.glsl'
import fragmentShader from './frag.glsl'

const { scene } = three()

const material = new THREE.ShaderMaterial({
  vertexShader,
  fragmentShader,
})
material.transparent = true;

const geometry = new THREE.SphereGeometry( 0.5, 64, 64 )
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)
