varying float alpha;

void main() {
  // make the fragment white with the alpha calculated from the vertex shader
  gl_FragColor = vec4(1.0, 1.0, 1.0, alpha + 0.1);
}
