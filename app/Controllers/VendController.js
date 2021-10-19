import { ProxyState } from "../AppState.js";
import { snackService } from "../Services/SnackService.js"

function _draw() {

  ProxyState.snacks.forEach(s => {
    document.getElementById(s.name).innerHTML = `
    <h4 class="card-title">${s.name}</h4>
    <p class="card-text">$ ${s.price}</p>
    <p class="card-text">Total: ${s.quantity}</p>
    <button class="btn btn-success">Purchase</button>
    `
  })
  document.getElementById('transactionTotal').innerText = `Total: $ ${ProxyState.money}`
}


export class VendController {
  constructor() {
    ProxyState.on('snacks', _draw)
    ProxyState.on('money', _draw)
    _draw()
  }

  cents() {
    snackService.cents()
  }

  choice(name) {
    snackService.snackChoice(name)
  }

}

