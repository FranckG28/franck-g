export default function useWordColor(
  word: string,
  saturation: number,
  brightness: number,
): string {
  const hue =
    word
      .split('')
      .map((char) => char.charCodeAt(0))
      .reduce((acc, curr) => acc + curr, 0) % 360
  return `hsl(${hue}, ${saturation}%, ${brightness}%)`
}
