import * as THREE from 'three'
import type { Options } from '../../types/open-the-door'

interface UseOpenTheDoor {
  dubleHorizontal: (
    scene: THREE.Scene,
    options: import('../../types/utils').DeepPartial<Options>
  ) => Promise<any>
  dubleRotate: (
    scene: THREE.Scene,
    options: import('../../types/utils').DeepPartial<Options>
  ) => Promise<any>
}

// 开门 open-the-door
export declare function useOpenTheDoor(): UseOpenTheDoor
