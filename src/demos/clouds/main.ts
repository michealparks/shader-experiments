import * as THREE from 'three'
import { lights, scene, update } from 'three-kit'
import vertexShader from './vert.glsl'
import fragmentShader from './frag.glsl'

const light = lights.createAmbient(undefined, 1)
scene.add(light)

const radius = 1
const widthSegments = 50
const heightSegments = 50
const geometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments)
const material = new THREE.ShaderMaterial({
  vertexShader,
  fragmentShader,
  uniforms: {
    uTime: { value: 0 },
    uResolution: { 
      value: {
        x: 500,
        y: 500
      }
    }
  },
})

const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

update((time) => {
  material.uniforms.uTime.value = (time / 1000)
})