import './style.css'
import data from './data.xml'

function foo () {
  document.getElementById('app').innerHTML = JSON.stringify(data)
}

foo()
