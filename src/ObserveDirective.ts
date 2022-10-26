/**
 * Modified from: https://lit.dev/docs/templates/custom-directives/
 */

import { noChange } from "lit-html";
import { AsyncDirective, directive } from "lit-html/async-directive";
import type { Subscribable } from ".";

class ObserveDirective extends AsyncDirective {

  observable: Subscribable<unknown>;
  unsubscribe: Function;

  // When the observable changes, unsubscribe to the old one and
  // subscribe to the new one
  render(observable) {
    if (this.observable !== observable) {
      this.unsubscribe?.();
      this.observable = observable;
      if (this.isConnected) {
        this.subscribe(observable);
      }
    }

    return noChange;
  }

  // Subscribes to the observable, calling the directive's asynchronous
  // setValue API each time the value changes
  subscribe(observable) {
    this.unsubscribe = observable.subscribe((v) => {
      this.setValue(v);
    });
  }

  // When the directive is disconnected from the DOM, unsubscribe to ensure
  // the directive instance can be garbage collected
  disconnected() {
    this.unsubscribe();
  }

  // If the subtree the directive is in was disconneted and subsequently
  // re-connected, re-subscribe to make the directive operable again
  reconnected() {
    this.subscribe(this.observable);
  }
}

export const observe = directive(ObserveDirective);
