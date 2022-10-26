# lit-signals

Use signals & observables directly in lit-html templates without needing an Async Directive.

## RxJS Example
```js
import { html } from 'lit-signals';
import { interval } from 'rxjs';

html`<div>${inverval(1000)}</div>`
```

## Preact Signals Example
```js
import { html } from 'lit-signals';
import { signal } from '@preact/signals-core';

const count$ = signal(0);
html`<input type="button" value=${count$} @click=${() => count$.value += 1}>`
```