import React from 'react'

type Props = {
  label: string
  onClick: () => void
  disabled?: boolean
  ariaLabel?: string
}

export default function A11yButton({ label, onClick, disabled = false, ariaLabel }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      // aria-label로 대체 텍스트 제공
      aria-label={ariaLabel}
      className="a11y-button"
    >
      {label}
    </button>
  )
}
