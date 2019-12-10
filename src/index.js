import loadsh from 'lodash'
import printHim from './print.js'

function component () {
  let element = document.createElement('div')
  let button = document.createElement('button')
  element.innerHTML = loadsh.join(['Hello', 'webpack'], ' ')
  button.innerHTML = 'click hh'
  console.log(printHim)
  button.onclick = printHim
  element.appendChild(button)
  // element.classList.add('hello')
  return element
}

document.body.appendChild(component())