attribute vec3 colors;

varying vec2 vUv;
varying vec3 vColors;


void main() {
  vec4 localPosition = vec4(position, 1.0);
  vUv = uv;
  vColors = colors;

  gl_Position = projectionMatrix * modelViewMatrix * localPosition;
}
