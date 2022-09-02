varying float alpha;

void main() { 
  // calculate the vertex position as expected in a perpective renderer
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

  // find vector from the vertex to camera and then normalise it
  vec3 viewVector =  normalize((cameraPosition - normal));

  // now find the dot poduct
  // facing the camera is 1 and perpendicular is 0 so for this effect you want to minus it from 1
  // note that alpha is the varying float passed between the vertex and fragment shader
  alpha =  1.0 - dot(normal, viewVector);
}
