import React, { useState } from 'react'

export default function MessageToggle({message}) {
    const [showMessage, setShowMessage] = useState(false);
    const handleClickShow = () => {
        setShowMessage(!showMessage)
    };
  return (
    <div>
        <button onClick={handleClickShow}>Show/hide message</button>
        { showMessage && <p>{message}</p>}
    </div>
  )
}
