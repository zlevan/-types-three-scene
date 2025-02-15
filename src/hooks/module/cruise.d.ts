import * as THREE from 'three'

interface UseCruise {
  createCruise: (
    options: import('../../types/utils').DeepPartial<Options>,
    renderer: THREE.WebGLRenderer
  ) => THREE.Group
  updateCruise: (
    options: import('../../types/utils').DeepPartial<Options>
  ) => void
  cruiseAnimate: (camera: any) => void
  bindEvent: () => void
  removeEvent: () => void
}

// 巡航
export declare function useCruise(): UseCruise
