varying vec2 vUv;

void main () {
  gl_FragColor = vec4(1., 1., 1., pow(vUv.y - 1., 2.));
}
