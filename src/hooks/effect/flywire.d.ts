import * as THREE from 'three'

import type { Options } from '../../types/flywire'

declare interface UseFlywire {
  createFlywireTexture: (
    options?: import('../../types/utils').DeepPartial<Options>
  ) => void
  createFlywire: (
    coords: import('../../types/utils').getType<Options, 'coords'>
  ) => THREE.Group
  update: () => void
  flywireUpdate: () => void
}

// 飞线
export declare function useFlywire(
  options?: import('../../types/utils').DeepPartial<Options>
): UseFlywire
