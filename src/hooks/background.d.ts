type Skys =
  | '216'
  | '217'
  | '218'
  | '219'
  | '220'
  | '221'
  | '222'
  | '223'
  | '224'
  | '225'
  | '226'

interface UseBackground {
  skys: Skys[]
  index: number
  change: (scene: any) => void
  changeBackground: (scene: any) => void
  load: (scene: any, code: Skys) => void
  getBgGroup: (code: Skys) => string[]
  backgroundLoad: (scene: any, code: Skys) => void
}

// 背景
export declare function useBackground(code?: Skys): UseBackground
