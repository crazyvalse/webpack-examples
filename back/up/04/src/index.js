import moment from 'moment'
import './style.css'
import xml from './data.xml'

function foo () {
  document.getElementById('app').innerHTML = JSON.stringify(xml) // moment().format('yyyy')
  console.info(xml)
}

foo()
