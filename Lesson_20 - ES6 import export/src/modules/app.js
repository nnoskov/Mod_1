import { JSBlock } from "./js-block";
import { TimerBlock } from "./timer-block";
import { JS_CREATION_DATE } from "../core/constants/settings";
export default class App {
  #jsBlock;
  #timerBlock;
  constructor() {
    this.#jsBlock = new JSBlock();
    this.#timerBlock = new TimerBlock(JS_CREATION_DATE);
  }
  run() {
    document.body.append(this.#jsBlock.render(), this.#timerBlock.render());
  }
}

// export { App }; - заменен на export в class
// export function createFunc() {
//     console.log('CreateFunc')
// }
