export const hslWithOpacity = (hsl: string, opacity: number): string => {
  const [h, s, l] = hsl
    .replace('hsl(', '')
    .replace(')', '')
    .split(',')
    .map((v) => v.trim())
  return `hsla(${h}, ${s}, ${l}, ${opacity})`
}

export const lerp = (a: number, b: number, t: number) => {
  t = Math.max(0, Math.min(1, t))
  return a * (1 - t) + b * t
}