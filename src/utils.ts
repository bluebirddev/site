export function times<T>(n: number, callback: (i: number) => T): T[] {
    return Array.from({ length: n }, (_, i) => callback(i))
}
