import type { Options } from '../../types/upload'

interface UseUpload {
  uploadModel: (
    files: any[],
    onSuccess: Function,
    onProgress?: Function
  ) => void
}

// 上传 upload
export declare function useUpload(
  options?: import('../../types/utils').DeepPartial<Options>
): UseUpload
