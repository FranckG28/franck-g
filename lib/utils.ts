export const hslWithOpacity = (hsl: string, opacity: number): string => {
  const [h, s, l] = hsl
    .replace('hsl(', '')
    .replace(')', '')
    .split(',')
    .map((v) => v.trim())
  return `hsla(${h}, ${s}, ${l}, ${opacity})`
}
export const getRandomNumber = (min: number, max: number) => {
  return Math.random() * (max - min) + min
}

export const getRandomNumbers = (min: number, max: number, count: number): number[] => {
  const numbers = new Set<number>()
  while (numbers.size < count) {
    numbers.add(Math.floor(getRandomNumber(min, max)))
  }
  return Array.from(numbers)
}