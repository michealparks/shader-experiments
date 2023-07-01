import './main.css'
import * as THREE from 'three'
import { three } from 'trzy'
import Inspect from 'three-inspect'

const { renderer, scene, camera } = three()

const demos = import.meta.glob('./demos/**/*.ts')

// Create demo

const savedDemo = window.localStorage.getItem('shaderExperiments.demo') || 'default'
const demoModule = demos[`./demos/${savedDemo}/main.ts`]!
const params = { demo: savedDemo }

const debug = new Inspect({ scene, camera: camera.current as THREE.PerspectiveCamera, renderer })
const pane = debug.addPane('Demos')

pane.addInput(params, 'demo', {
  options: Object.fromEntries(Object.keys(demos).map(key => [key.split('/')[2], key.split('/')[2]])),
}).on('change', () => {
  window.localStorage.setItem('shaderExperiments.demo', params.demo)
  window.location.reload()
})

camera.current.position.set(0, 1, 2)
camera.current.lookAt(0, 0, 0)

demoModule()

