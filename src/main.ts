import './main.css'
import { camera, run } from 'three-kit'

import * as debug from 'three-kit/debug'

const demos = import.meta.glob('./demos/**/*.ts')

// Create demo

const savedDemo = window.localStorage.getItem('shaderExperiments.demo') || 'default'
const demoModule = await demos[`./demos/${savedDemo}/main.ts`]
const params = { demo: savedDemo }
const pane = debug.addPane('demos')

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

