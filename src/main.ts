import './main.css'
import * as THREE from 'three'
import { scene, camera, run, renderer, composer } from 'three-kit'

renderer.setClearColor(0x000000)

import Inspect from 'three-inspect'

const demos = import.meta.glob('./demos/**/*.ts')

// Create demo

const savedDemo = window.localStorage.getItem('shaderExperiments.demo') || 'default'
const demoModule = demos[`./demos/${savedDemo}/main.ts`]
const params = { demo: savedDemo }

const debug = new Inspect(THREE, scene, camera, renderer, composer)
const pane = debug.addPane('Demos')

pane.addInput(params, 'demo', {
  options: Object.fromEntries(Object.keys(demos).map(key => [key.split('/')[2], key.split('/')[2]])),
}).on('change', () => {
  window.localStorage.setItem('shaderExperiments.demo', params.demo)
  window.location.reload()
})

camera.position.set(0, 1, 2)
camera.rotation.set(0, 0, 0)
camera.lookAt(0, 0, 0)

demoModule()
run()

