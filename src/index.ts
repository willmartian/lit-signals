import { html as _html } from "lit-html";
import { observe } from "./ObserveDirective";

export type Subscribable<T> = {
    subscribe(subscriber: (value: T) => unknown): unknown;
}

export const html = (strings: TemplateStringsArray, ...values: unknown[]) => {
    return _html(strings, ...values.map(
        val => isSubscribable(val) ? observe(val) : val)
    );
}

const isSubscribable = (value: any): value is Subscribable<unknown> => {
    return 'subscribe' in value && typeof value.subscribe === 'function';
}