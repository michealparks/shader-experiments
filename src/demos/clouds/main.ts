import * as THREE from 'three'
import vertexShader from './vert.glsl'
import fragmentShader from './frag.glsl'
import { three } from 'trzy'

const { scene, update } = three()

const light = new THREE.AmbientLight()
scene.add(light)

const radius = 0.5
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

let time = 0
update((_ctx, dt) => {
  time += dt
  material.uniforms['uTime']!.value = (time / 1000)
})
