import * as THREE from 'three'

interface UsemapBar {
  createBar: (
    opts?: {
      heightRatio?: number
      position?: number[]
      label?: {
        name?: string
        className?: string
        onClick?: (e: Event) => void
      }
    },
    options?: import('../../types/utils').DeepPartial<Options>
  ) => THREE.Group & {
    isBar?: boolean
  }
}

// 地图柱状图 map-bar
export declare function useMapBar(
  options?: import('../../types/utils').DeepPartial<Options>
): UsemapBar
