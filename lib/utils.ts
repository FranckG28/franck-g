export const hslWithOpacity = (hsl: string, opacity: number): string => {
    const [h, s, l] = hsl
        .replace('hsl(', '')
        .replace(')', '')
        .split(',')
        .map((v) => v.trim());
    return `hsla(${h}, ${s}, ${l}, ${opacity})`;
}
