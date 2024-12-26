import type { Options } from '../../types/roam'

interface UseRoam {
  createRoam: (
    options?: import('../../types/utils').DeepPartial<Options>
  ) => void
  updateRoam: (
    options: import('../../types/utils').DeepPartial<Options>
  ) => void
  executeRoam: (camera: any, controls: any) => void
  pause: () => void
  play: () => void
  reset: (options: import('../../types/utils').DeepPartial<Options>) => void
  getStatus: () => import('../../types/utils').getType<Options, 'runing'>
}
// 漫游 roam
export declare function useRoam(): UseRoam
