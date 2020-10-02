import React from 'react';
import ReactDOM from 'react-dom';
import App from './script/App';
import './main.scss'

document.onload = () => {

  const buttons = document.getElementsByClassName('header__button')
  // buttons.forEach(element => {


  //   element.addEventListener('mousehover', () => {
  //     if (element.childNodes.length < 1) {
  //       element.appendChild('span')
  //     }
  //   })

  //   element.appendChild(document.createElementment('span'))
  //   element.addEventListener('mousemove', () => {
  //     const child = element.childNodes[0]

  //   })
  // });

}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// bee

