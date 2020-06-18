import moment from 'moment'
import xml from './data.xml'
import './style.css'

function foo () {
  document.getElementById('app').innerHTML = moment().format('yyyy')
  console.info(xml)
}

foo()
