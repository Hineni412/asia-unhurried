import { useEffect, useRef, useState } from 'react'
import type { AttractionPhoto } from '../content/attractions'

export function AttractionGallery({ photos, name }: { photos: AttractionPhoto[]; name: string }) {
  const [index, setIndex] = useState(0)
  const [stripIndex, setStripIndex] = useState(0)
  const [open, setOpen] = useState(false)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const stripRef = useRef<HTMLDivElement>(null)
  const touchX = useRef(0)
  const photo = photos[index]
  const step = (direction: number) => setIndex(previous => (previous + direction + photos.length) % photos.length)

  function closeGallery() {
    setOpen(false)
    const strip = stripRef.current
    if (strip && strip.scrollWidth > strip.clientWidth + 5) {
      setStripIndex(index)
      const tile = strip.children[index] as HTMLElement
      strip.scrollTo({ left: tile.offsetLeft - (strip.firstElementChild as HTMLElement).offsetLeft, behavior: 'instant' })
    }
  }

  useEffect(() => {
    if (!open) return
    const dialog = dialogRef.current
    if (!dialog) return
    const previousOverflow = document.body.style.overflow
    dialog.showModal()
    document.body.style.overflow = 'hidden'
    return () => { dialog.close(); document.body.style.overflow = previousOverflow }
  }, [open])

  function scrollPhoto(direction: number) {
    const strip = stripRef.current
    if (!strip || photos.length === 0) return
    const next = (stripIndex + direction + photos.length) % photos.length
    const tile = strip.children[next] as HTMLElement
    strip.scrollTo({ left: tile.offsetLeft - (strip.firstElementChild as HTMLElement).offsetLeft, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })
  }

  if (photos.length === 0) return null

  return <div className="attraction-gallery-wrap">
    <div ref={stripRef} className="attraction-gallery" aria-label={`${name}实拍相册`} onScroll={event => {
      const strip = event.currentTarget
      if (strip.scrollWidth > strip.clientWidth + 5) setStripIndex(Math.min(photos.length - 1, Math.round(strip.scrollLeft / (strip.clientWidth + 8))))
    }}>
      {photos.map((image, i) => <button type="button" key={image.src} className="gallery-tile" onClick={() => { setIndex(i); setOpen(true) }} aria-label={`放大第 ${i + 1} 张：${image.caption}`}>
        <img src={image.src} alt={image.alt} width={1200} height={800} loading={i < 5 ? 'eager' : 'lazy'} />
        {i === 4 && <span className="gallery-all">查看全部 {photos.length} 张</span>}
      </button>)}
    </div>
    <div className="gallery-caption text-note text-ink-faint"><p>实拍记录 · 展陈与开放区域以到访当天为准</p><div className="gallery-mobile-controls"><button onClick={() => scrollPhoto(-1)} aria-label="上一张照片">←</button><span>{stripIndex + 1} / {photos.length}</span><button onClick={() => scrollPhoto(1)} aria-label="下一张照片">→</button></div><button className="text-accent underline underline-offset-4" onClick={() => { setIndex(stripIndex); setOpen(true) }}>放大与图片来源</button></div>
    <dialog ref={dialogRef} className="photo-dialog" aria-label={`${name}照片与来源`} onCancel={closeGallery} onClose={closeGallery} onClick={event => { if (event.target === event.currentTarget) closeGallery() }} onKeyDown={event => {
      if (event.key === 'ArrowRight') { event.preventDefault(); step(1) }
      if (event.key === 'ArrowLeft') { event.preventDefault(); step(-1) }
    }}>
      <div className="photo-dialog-inner">
        <div className="photo-dialog-toolbar"><p>{name} <span className="text-note">{index + 1} / {photos.length}</span></p><button autoFocus type="button" onClick={closeGallery} aria-label="关闭相册">关闭 ×</button></div>
        <div className="photo-dialog-stage" onTouchStart={event => { touchX.current = event.touches[0].clientX }} onTouchEnd={event => { const difference = event.changedTouches[0].clientX - touchX.current; if (Math.abs(difference) > 50) step(difference < 0 ? 1 : -1) }}>
          <button className="photo-previous" onClick={() => step(-1)} aria-label="上一张">←</button><img src={photo.src} alt={photo.alt} /><button className="photo-next" onClick={() => step(1)} aria-label="下一张">→</button>
        </div>
        <p className="mt-4 text-small">{photo.caption}</p>
        <p className="mt-2 text-note text-ink-faint">摄影：{photo.author} · <a href={photo.source} target="_blank" rel="noreferrer" className="underline">原图来源</a> · <a href={photo.licenseUrl} target="_blank" rel="noreferrer" className="underline">{photo.license}</a></p>
      </div>
    </dialog>
  </div>
}
