varying vec2 vUv;

uniform sampler2D diffuse;
uniform sampler2D overlay;
uniform vec4 tint;
uniform float time;

void main () {
  vec2 uvs = vUv * vec2(-1.0, 1.0 / time);
  vec4 diffuseSample = texture2D(diffuse, vec2(uvs.x, uvs.y));
  vec4 overlaySample = texture2D(overlay, uvs);
  gl_FragColor = mix(diffuseSample, overlaySample, overlaySample.w);
}
