import { Reactive, toRef } from 'vue'

import type { Options } from '../../types/dialog'

interface UseDialog {
  dialog: Reactive<import('../../types/utils').DeepPartial<Options>>
  options: Reactive<import('../../types/utils').DeepPartial<Options>>
  show: toRef<import('../../types/utils').getType<Options, 'show'>>
}

// 弹窗配置
export declare function useDialog(
  options?: import('../../types/utils').DeepPartial<Options>
): UseDialog
