import { Snack } from "./Models/Snacks.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []

  money = 0

  snacks = [
    new Snack('Mountain-Dew', 2.50, 12),
    new Snack('Doritos', 1.25, 13),
    new Snack('Root-Beer', 2.50, 20),
    new Snack('Reeses', 2, 16)
  ]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
