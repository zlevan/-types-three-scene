import * as THREE from 'three'

import type { Grid } from '../../types'
type Options = Pick<Grid, 'width' | 'divisions' | 'forkColor' | 'forkSize'>

interface UseGrid {
  createFork: (
    options?: import('../../types/utils').DeepPartial<Options>
  ) => THREE.Group
}

// 网格交叉
export declare function useGrid(): UseGrid
