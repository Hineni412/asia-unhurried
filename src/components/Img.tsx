import { useState, type ImgHTMLAttributes } from 'react'

// 内联 SVG 占位：沙色底 + 简短说明，替代浏览器破图图标与裸露 alt。
const PLACEHOLDER = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="900" height="600" viewBox="0 0 900 600"><rect width="900" height="600" fill="#e9e2d4"/><text x="450" y="300" text-anchor="middle" dominant-baseline="middle" font-family="sans-serif" font-size="26" fill="#8a8378">图片暂时没有加载</text></svg>',
)}`

type Props = ImgHTMLAttributes<HTMLImageElement>

/** 与 <img> 同接口；加载失败时把 src 换成等比占位图，CSS 选择器与布局不受影响。 */
export function Img({ onError, src, ...rest }: Props) {
  // 失败按 src 记：组件复用（翻页换图）时新地址重新尝试加载。
  const [failedSrc, setFailedSrc] = useState<unknown>(null)
  const failed = src !== undefined && failedSrc === src
  return (
    <img
      {...rest}
      src={failed ? PLACEHOLDER : src}
      onError={(e) => {
        setFailedSrc(src)
        onError?.(e)
      }}
    />
  )
}
