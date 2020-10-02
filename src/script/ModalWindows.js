import React, { useState, useEffect } from "react"
import ModalWindow from '../modules/ModalWindow/ModalWindow'

function ModalWindows() {
  const [modals, setModals] = useState([]);

  useEffect(() => {
    setModals(Array(200)
      .fill('')
      .map((item, index) => {
        return {
          key: index + new Date().getUTCMilliseconds(),
          firstLeft: 50 + Math.floor(Math.random() * 800),
          firstTop: 50 + Math.floor(Math.random() * 200)
        }
      })
    )
  }, [])

  function pushWindowUp(aKey) {
    setModals(
      prev => {
        const aModal = prev.splice(prev.findIndex(el => { return el.key === aKey }), 1)[0]
        prev.push(aModal)
        return [...prev];
      })
  }

  const style = {
    overflowY: 'scroll',
    zIndex: 10,
    color: 'black',
    position: 'absolute',
    right: 20,
    top: 10,
    height: '90%',
  }

  return (
    <div>
      {modals.map((item) => <ModalWindow {...item} uniqueKey={item.key} pushMeUp={pushWindowUp} />)}
      <ul style={style}>
        {modals.map((item) => <li key={item.key}> {item.key} </li>)}
      </ul>
    </div >
  )
}

export default ModalWindows;