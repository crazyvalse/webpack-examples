import { ceil } from './utils'
import './style.css'

function foo () {
  document.getElementById('app').innerHTML = ceil(3.123321)
}

foo()

document.getElementById('btn').onclick = function () {
  import( /* webpackPreload: true */  'moment').then(({ default: moment }) => {
    document.getElementById('app').innerHTML += ' ' + moment().format('L')
  })
}

