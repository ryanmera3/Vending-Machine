import { ProxyState } from "../AppState.js";
import { Snack } from "../Models/Snacks.js";

class SnackService {
  createSnack(snackData) {

    let snack = new Snack(snackData.name, snackData.price, snackData.quantity)
    ProxyState.snacks = [...ProxyState.snacks, snack]
    console.log(ProxyState.snacks)
  }
  snackChoice(name) {
    ProxyState.snacks.forEach(s => {
      if (s.name == name && ProxyState.money >= s.price) {
        ProxyState.money -= s.price
        s.quantity -= 1
      }

    }
    )
    ProxyState.snacks = ProxyState.snacks
  }
  cents() {

    ProxyState.money += 0.25

  }
}


export const snackService = new SnackService()