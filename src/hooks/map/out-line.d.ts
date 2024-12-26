import * as THREE from 'three'
import type { Options } from '../../types/out-line'

interface UseOutline {
  createOutline: (
    points: number[],
    options?: import('../../types/utils').DeepPartial<Options>
  ) => THREE.Points
  update: (mesh: any) => void
  outlineUpdate: (mesh: any) => void
}

// 边缘线(地图 边界) out-line
export declare function useOutline(
  options?: import('../../types/utils').DeepPartial<Options>
): UseOutline
