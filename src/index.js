import loadsh from 'lodash'
import printHim from './print.js'
import { add } from './math.js'
function component () {
  let element = document.createElement('div')
  let button = document.createElement('button')
  element.innerHTML = loadsh.join(['Hello', 'webpack'], ' ')
  button.innerHTML = add(1, 2, 3, 4, 5, 6, 7)
  // console.log(printHim)
  // button.onclick = printHim
  element.appendChild(button)
  // element.classList.add('hello')
  return element
}

document.body.appendChild(component())