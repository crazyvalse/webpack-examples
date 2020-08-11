import { getText } from './text'

document.getElementById('btn').onclick = function () {
  getText().then((text) => {
    document.getElementById('app').innerHTML = text
  })
}
