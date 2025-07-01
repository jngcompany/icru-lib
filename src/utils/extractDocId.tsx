export function extractDocId(ref: any) {
  return ref?._path?.segments?.[1] ?? null // 문서 ID만 추출
}
