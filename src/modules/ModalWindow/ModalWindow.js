import "./ModalWindow.scss";
import React, { useEffect, useState, useRef } from 'react'

function ModalWindow({ firstLeft, firstTop, uniqueKey, pushMeUp }) {
  const [backIsVisible, setBackIsVisible] = useState(false)

  const [style, setStyle] = useState({
    left: firstLeft,
    top: firstTop,
    width: 234,
    height: 345
  })

  const [mouseIsDown, setMouseIsDown] = useState(0);

  const mouseMovement = (evt) => {
    const xx = evt.clientX
    const yy = evt.clientY

    setStyle((prev) => { return { ...prev, left: xx, top: yy } })
  }

  const mouseDown = (evt) => {
    setBackIsVisible(true)
    pushMeUp(uniqueKey)
  }

  const mouseUp = (evt) => {
    setBackIsVisible(false)
  }

  return (
    <div>
      <div className='modal-window' style={style}> a modal Window #{uniqueKey}
        <div className="modal-window__lt" onMouseDown={mouseDown}></div>
        <div className="modal-window__rt" onMouseDown={mouseDown}></div>
        <div className="modal-window__lb" onMouseDown={mouseDown}></div>
        <div className="modal-window__rb" onMouseDown={mouseDown}></div>

        <h1>Some text i'll write here</h1>

        <h2>And some will put here</h2>
      </div >

      <div
        className={backIsVisible ? "modal-window__mouse-listener" : "modal-window__mouse-listener_hidden"}
        onMouseMove={(ev) => mouseMovement(ev)}
        onMouseDown={mouseDown}
        onMouseUp={mouseUp}></div>
      <div
        className="modal-window__coords">
        mouseIsDown={mouseIsDown}</div>
    </div>
  )
}


export default ModalWindow;