export function assertNonNullable<T>(value: T): asserts value is NonNullable<T> {
    if (value == null) {
        throw new Error(`${value} is nullable`);
    }
}