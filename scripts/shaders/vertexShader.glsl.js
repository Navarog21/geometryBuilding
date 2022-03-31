const vshader = `

varying vec3 newPosition;
varying vec2 vertexUV;
varying vec3 vertexNormal;

void main()
{
  newPosition = position;

  vertexUV = uv;
  vertexNormal = normalize(normalMatrix * normal);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
}`

export default vshader
