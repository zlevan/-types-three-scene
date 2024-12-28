import * as THREE from 'three'

import type { Options } from '../../types/lensflare'

interface UseLensflare {
  addLensflare: (
    color: string | number,
    x: number,
    y: number,
    z: number
  ) => THREE.PointLight
}

// 太阳光晕 lensflare
export declare function useLensflare(
  options?: import('../../types/utils').DeepPartial<Options>
): UseLensflare
