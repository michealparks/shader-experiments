varying vec2 vUv;
varying vec3 vColors;

uniform vec3 color1;
uniform vec3 color2;

void main () {
  gl_FragColor = vec4(vColors, 1.0);
}