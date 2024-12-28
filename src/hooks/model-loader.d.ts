import type { ModelItem, ThreeModelItem } from '../types/model'

import { Reactive } from 'vue'

import type {
  Progress,
  Options,
  VtOptions,
  ModelMap
} from '../types/model-loader'

interface UseModelLoader {
  progress: Reactive<Progress>
  MODEL_MAP: ModelMap
  loadModel: (model: ModelItem, onProgress?: Function) => Promise<any>
  loadModels: (
    models: ModelItem[],
    onSuccess: Function,
    onProgress?: Function
  ) => void
  getModel: (key: string) => any
  virtualization: (
    models: ThreeModelItem[],
    model: ThreeModelItem,
    opts: import('../types/utils').DeepPartial<VtOptions>
  ) => void
  closeVirtualization: (model: any) => void
}

// 模型加载 model-loader
export declare function useModelLoader(
  options: import('../types/utils').DeepPartial<Options>
): UseModelLoader
