const fragmentShader = `

uniform sampler2D globeTexture;
varying vec2 vertexUV;
varying vec3 vertexNormal;

void main()
{
  float intensity = 2.05 - dot(vertexNormal, vec3(1.0, 1.0, 1.0));
  vec3 atmosphere = vec3(0.9, 0.6, 1.0) * pow(intensity, 1.5);

  gl_FragColor = vec4(0.1, 0.8, 1.0, 1.0);
}
`
export default fragmentShader