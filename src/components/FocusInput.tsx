import React, { useRef } from 'react'

const FocusInput = () => {

  const handleFocus = () => {
    inputRef.current?.focus(); 
  }
  const inputRef = useRef<HTMLInputElement>(null)
  return (
    <div>
      <input type="text" ref={inputRef} placeholder='Click the button to focus me' />
      <button onClick={handleFocus}> Focus Input</button>
    </div>
  )
}

export default FocusInput