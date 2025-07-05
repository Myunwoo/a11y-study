import React, { useState, useRef, useEffect } from 'react'

type A11yDropdownProps = {
  options: string[]
  selected: string
  onSelect: (value: string) => void
  label: string
}

export default function A11yDropdown({ options, selected, onSelect, label }: A11yDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const listRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    if (isOpen) {
      setActiveIndex(options.findIndex((opt) => opt === selected))
    }
  }, [isOpen, selected, options])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) {
      if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        setIsOpen(true)
      }
      return
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIndex((prev) => (prev + 1) % options.length)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIndex((prev) => (prev - 1 + options.length) % options.length)
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      if (activeIndex >= 0) {
        onSelect(options[activeIndex])
        setIsOpen(false)
      }
    } else if (e.key === 'Escape') {
      e.preventDefault()
      setIsOpen(false)
    }
  }

  return (
    <div className="a11y-dropdown">
      <label id="dropdown-label">{label}</label>
      <button
        ref={buttonRef}
        // 드롭다운 역할을 명시
        aria-haspopup="listbox"
        // 열림/닫힘 상태 전달
        aria-expanded={isOpen}
        aria-labelledby="dropdown-label"
        aria-controls="dropdown-listbox"
        onClick={() => setIsOpen((prev) => !prev)}
        onKeyDown={handleKeyDown}
        className="dropdown-button"
      >
        {selected}
      </button>

      {isOpen && (
        <ul
          id="dropdown-listbox"
          // 옵션 목록임을 명시
          role="listbox"
          tabIndex={-1}
          ref={listRef}
          className="dropdown-list"
          // 현재 키보드 포커스 대상 전달
          aria-activedescendant={
            activeIndex >= 0 ? `option-${activeIndex}` : undefined
          }
        >
          {options.map((opt, index) => (
            <li
              key={opt}
              id={`option-${index}`}
              // 각 항목이 선택 가능 옵션임을 명시
              role="option"
              // 선택된 항목 명시
              aria-selected={selected === opt}
              className={`dropdown-option ${
                index === activeIndex ? 'focused' : ''
              }`}
              onClick={() => {
                onSelect(opt)
                setIsOpen(false)
                buttonRef.current?.focus()
              }}
              onMouseEnter={() => setActiveIndex(index)}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
