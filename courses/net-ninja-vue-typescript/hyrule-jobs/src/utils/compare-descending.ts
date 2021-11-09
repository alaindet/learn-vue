import { SortingFunction } from '@/types';

export function compareDescending(a: string | number, b: string | number): number {
  return (a === b) ? 0 : (a > b ? -1 : 1);
}
export function compareDescendingKey(key: string | number): SortingFunction {
  return (a: any, b: any) => compareDescending(a[key], b[key]);
}
