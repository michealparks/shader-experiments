import * as THREE from 'three'
import { three, loadTexture } from 'trzy'
import vertexShader from './vert.glsl'
import fragmentShader from './frag.glsl'

const { scene, camera, renderer, update } = three()

camera.current.lookAt(0, 0, 0)

const [diffuse, overlay] = await Promise.all([
  loadTexture('textures/GroundForest003/GroundForest003_COL_VAR1_1K.jpg'),
  // loadTexture('textures/dog.jpg'),
  loadTexture('textures/vector.png'),
])

diffuse.wrapS = THREE.RepeatWrapping
diffuse.wrapT = THREE.RepeatWrapping

overlay.wrapS = THREE.RepeatWrapping
overlay.wrapT = THREE.RepeatWrapping

diffuse.anisotropy = renderer.capabilities.getMaxAnisotropy()
overlay.anisotropy = renderer.capabilities.getMaxAnisotropy()

let time = 0

const size = 0.5
const geometry = new THREE.BoxGeometry(size, size, size)
const material = new THREE.ShaderMaterial({
  uniforms: {
    diffuse: { value: diffuse },
    overlay: { value: overlay },
    tint: { value: new THREE.Vector4(1, 1, 1, 1) },
    time: { value: time },
  },
  vertexShader,
  fragmentShader,
})
material.side = THREE.DoubleSide
material.transparent = true

const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

update(() => {
  time = Math.sin(performance.now() / 100) * 80 + 150
  material.uniforms['time']!.value = time
})
