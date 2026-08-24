export function hasUsableWebGL() {
  if (typeof document === 'undefined') return false

  const canvas = document.createElement('canvas')

  try {
    const contextOptions = { failIfMajorPerformanceCaveat: true }
    const gl =
      canvas.getContext('webgl2', contextOptions) ||
      canvas.getContext('webgl', contextOptions)

    if (!gl) return false

    gl.getExtension('WEBGL_lose_context')?.loseContext()
    return true
  } catch {
    return false
  }
}
