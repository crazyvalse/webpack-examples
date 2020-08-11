import moment from 'moment'
import xml from './data.xml'
import './style.css'

function foo () {
  document.getElementById('app').innerText = moment().format('YYYY')
  console.info(xml)
}

foo()

// window.foo = foo
