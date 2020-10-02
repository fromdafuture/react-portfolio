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


  let offsetX, offsetY
  const move = e => {
    const el = e.target
    el.style.left = `${e.pageX - offsetX}px`
    el.style.top = `${e.pageY - offsetY}px`
  }
  const add = e => {
    const el = e.target
    offsetX = e.clientX - el.getBoundingClientRect().left
    offsetY = e.clientY - el.getBoundingClientRect().top
    el.addEventListener('mousemove', move)
  }
  const remove = e => {
    const el = e.target
    el.removeEventListener('mousemove', move)
  }

  return (
    <div>
      <div className='modal-window' style={style}> a modal Window #{uniqueKey}
        <div className="modal-window__lt" onMouseDown={mouseDown}></div>
        <div className="modal-window__rt" onMouseDown={add} onMouseUp={remove}></div>
        <div className="modal-window__lb" onMouseDown={mouseDown}></div>
        <div className="modal-window__rb" onMouseDown={mouseDown}></div>

        <h1>Some text i'll write here</h1>

        <h2>And some will put here</h2>
      </div >

      <div
        className={backIsVisible ? "modal-window__mouse-listener" : "modal-window__mouse-listener_hidden"}
        onMouseMove={(ev) => mouseMovement(ev)}
        onMouseUp={mouseUp}></div>

    </div>
  )
}


export default ModalWindow;