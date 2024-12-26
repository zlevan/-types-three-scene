import type { Options } from '../../types/floor'

interface UseFloor {
  floorAnimate: (
    list: any[],
    index: number | undefined,
    getFllowMarkFn: (mark: string) => any[]
  ) => void
}

// 楼层 floor
export declare function useFloor(
  options: import('../../types/utils').DeepPartial<Options>
): UseFloor
