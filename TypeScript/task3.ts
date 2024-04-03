// task3.ts

// Функция zip с generic-параметрами
export function zip<T, U>(first: T[], second: U[]): Array<[T, U]> {
    const minLength = Math.min(first.length, second.length);
    const result: Array<[T, U]> = [];
    for (let i = 0; i < minLength; i++) {
        result.push([first[i], second[i]]);
    }
    return result;
}

// Функция groupBy с generic-параметрами
export function groupBy<K, T, V>(source: T[], keySelector: (item: T, index: number) => K, valueSelector: (item: T, index: number) => V): Map<K, V[]> {
    const result = new Map<K, V[]>();
    for (let i = 0; i < source.length; i++) {
        const key = keySelector(source[i], i);
        const value = valueSelector(source[i], i);
        if (!result.has(key)) {
            result.set(key, []);
        }
        result.get(key)!.push(value);
    }
    return result;
}
