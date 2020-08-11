import moment from 'moment'
import './style.css'

document.getElementById('btn').onclick = function () {
  document.getElementById('app').innerText = moment().format('L')
}
