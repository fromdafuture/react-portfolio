import regeneratorRuntime from "regenerator-runtime";
import React, { useEffect } from 'react'
import ModalWindows from './ModalWindows';


async function getUsers() {
  try {
    const responce = await fetch('https://jsonplaceholder.typicode.com/users/')
    const json = await responce.json()
    console.log(json)
    if (json) return json
  } catch (err) {
    console.log(err);
  }
}


function App() {
  useEffect(
    () => {
      const users = getUsers()
      // if (users) { }
    }
    , []
  )



  return (
    <div className='container'>
      <div className='header'>
        <div className='header__logo'>Тестовая страница для разбора реакта, запросов, и т.п.</div>
        <div className='header__menu'>
          <div className='header__login header__button'>Вход</div>
          <div className='header__auth header__button'>Регистрация</div>
        </div>

      </div>
      <div>Hello </div>
      <ModalWindows />
    </div>
  )
}

export default App