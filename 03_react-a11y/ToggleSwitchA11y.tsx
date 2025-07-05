import React from 'react'

type A11yToggleSwitchProps = {
  checked: boolean
  onChange: (checked: boolean) => void
  id?: string
  label?: string
  disabled?: boolean
}

export default function A11yToggleSwitch({
  checked,
  onChange,
  id,
  label,
  disabled = false,
}: A11yToggleSwitchProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (disabled) return
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault()
      onChange(!checked)
    }
  }

  return (
    <div className="a11y-toggle-wrapper">
      {label && (
        <label htmlFor={id} style={{ marginRight: '8px' }}>
          {label}
        </label>
      )}
      <div
        id={id}
        // 스크린 리더에 "스위치 역할"로 인식됨
        role="switch"
        // 현재 상태 true/false 전달
        aria-checked={checked}
        // 키보드로 포커스 이동 가능
        tabIndex={disabled ? -1 : 0}
        aria-disabled={disabled}
        onClick={() => !disabled && onChange(!checked)}
        // Space/Enter로 상태 토글 가능
        onKeyDown={handleKeyDown}
        className={`a11y-toggle ${checked ? 'on' : 'off'} ${disabled ? 'disabled' : ''}`}
      >
        {/* 토글 시각적 표현 */}
        <div className="thumb" />
      </div>
    </div>
  )
}
