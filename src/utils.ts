export function assertNotNull<T>(
  value: T | null,
  label: string
): asserts value is T {
  if (value === null) {
    throw new Error(`Expected ${label} not to be null`);
  }
}
