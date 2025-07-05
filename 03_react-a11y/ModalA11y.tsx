import React, { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  titleId?: string
  descriptionId?: string
  ariaLabel?: string
  closeOnEsc?: boolean
  closeOnBackdropClick?: boolean
  initialFocusRef?: React.RefObject<HTMLElement>
  children: React.ReactNode
}

export default function Modal({
  isOpen,
  onClose,
  titleId,
  descriptionId,
  ariaLabel,
  closeOnEsc = true,
  closeOnBackdropClick = true,
  initialFocusRef,
  children,
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)
  const lastFocusedElement = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!isOpen) return

    // 스크롤 잠금
    document.body.style.overflow = 'hidden'

    // 포커스 저장 & 이동
    lastFocusedElement.current = document.activeElement as HTMLElement
    const toFocus = initialFocusRef?.current ?? modalRef.current?.querySelector<HTMLElement>('button, [tabindex]:not([tabindex="-1"])')
    toFocus?.focus()

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && closeOnEsc) {
        e.preventDefault()
        onClose()
      }

      if (e.key === 'Tab') {
        const focusable = modalRef.current?.querySelectorAll<HTMLElement>(
          'a[href], area, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
        )
        if (!focusable || focusable.length === 0) return

        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        const active = document.activeElement

        if (e.shiftKey && active === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && active === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
      lastFocusedElement.current?.focus()
    }
  }, [isOpen, closeOnEsc, onClose, initialFocusRef])

  if (!isOpen) return null

  return ReactDOM.createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      aria-label={ariaLabel}
      className="modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget && closeOnBackdropClick) {
          onClose()
        }
      }}
    >
      <div ref={modalRef} className="modal-content" tabIndex={-1}>
        {children}
      </div>
    </div>,
    document.body
  )
}
