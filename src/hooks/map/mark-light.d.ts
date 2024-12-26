import * as THREE from 'three'

import type { Options } from '../../types/mark-light'

interface UseMarkLight {
  createMarkLight: (
    position?: number[],
    height?: number,
    options?: import('../../types/utils').DeepPartial<Options>
  ) => THREE.Group
}

// 光柱
export declare function useMarkLight(
  options?: import('../../types/utils').DeepPartial<Options>
): UseMarkLight
