import { SortingFunction } from '@/types';

export function compareAscending(a: string | number, b: string | number): number {
  return (a === b) ? 0 : (a < b ? -1 : 1);
}
export function compareAscendingKey(key: string | number): SortingFunction {
  return (a: any, b: any) => compareAscending(a[key], b[key]);
}
