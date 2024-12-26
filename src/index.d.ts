import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import type { XYZ } from './types/model'

declare type Camera = THREE.PerspectiveCamera | THREE.OrthographicCamera

declare type Controls = OrbitControls

export class Scene {
  // 配置
  options: import('./types').Options
  // 容器
  container: HTMLElement
  // 场景
  scene: THREE.Scene
  // 渲染器
  renderer: THREE.WebGLRenderer
  // 基础相机
  baseCamera: Camera
  // 巡航相机
  cruiseCamera?: Camera
  // 巡航组
  cruiseGroup?: THREE.Group
  // 控制器
  controls?: Controls
  // 网格
  grid?: THREE.GridHelper
  // 动画 id
  animationId?: number
  // 静态属性
  static total: number
  // 鼠标
  pointer: {
    tsp: number
    isClick: boolean
  }

  // 时间
  clock?: THREE.Clock

  constructor(options: import('./types').Params)

  readonly camera: Camera

  init(): void
  run(): void
  loop(): void
  animate(): void

  // 模型
  initModel(): void

  // 模型动画
  modelAnimate(): void

  // 渲染器
  initRenderer(): THREE.WebGLRenderer

  // 灯光
  initLight(): void

  // 创建平行光
  createDirectionalLight(): THREE.DirectionalLight

  // 相机
  initCamera(): Camera

  // 控制器
  initControls(): Controls

  // 巡航
  initCruise(): void

  // 网格
  initGrid(): void

  // 坐标辅助器
  initAxes(): void

  // 创建地面
  createGround(
    sizeX?: number,
    sizeY?: number,
    color?: number | string
  ): THREE.Mesh

  // 创建时间
  createClock(): void

  // 设置巡航点位
  setCruisePoint(points: number[][]): void

  // 创建巡航组
  createCruise(): void

  // 巡航启动或关闭
  toggleCruise(close?: boolean): void

  // 开启或关闭巡航深度测试
  toggleCruiseDepthTest(depthTest?: boolean): void

  // 设置缩放
  setScale(s: number): void

  // 设置环境
  setEnvironment(env: string): void

  // 设置背景图
  setBgTexture(bgUrl: string | string[]): void

  // 设置背景色
  setBgColor(color: number | string): void

  // 绑定事件
  bindEvent(): void

  onDblclick(_e: MouseEvent): void
  onPointerDown(e: PointerEvent): void
  onPointerMove(_e: PointerEvent): void
  onPointerUp(_e: PointerEvent): void

  // 导出图片
  exportImage(): void

  // 获取场景坐标
  getPosition(): {
    position: THREE.Vector3
    target: THREE.Vector3
  }

  // 判断相机位置是否移动
  isCameraMove(to: XYZ, distance?: number): boolean

  // 控制保存
  controlSave(): void

  // 控制重置
  controlReset(): void

  // 添加对象到场景
  addObject(...object: any[]): void

  // 获取有效的目标点 并设置中心点
  getValidTargetPosition(
    config: {
      to?: XYZ
      target?: XYZ
    },
    _to?: XYZ,
    _target?: XYZ,
    defaultTo?: XYZ
  ): XYZ

  // 重置画布大小
  resize(): void

  // 停止动画
  stopAnimate(): void

  // 清除对象
  clear(obj: any): void

  // 销毁对象
  disposeObj(obj: any): void

  // 销毁场景
  dispose(): void
}
