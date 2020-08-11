import moment from 'moment'
import './style.css'

function foo () {
  document.getElementById('app').innerHTML = moment().format('yyyy')
}

foo()
