export type Subscribable<T> = {
    subscribe(subscriber: (value: T) => unknown): unknown;
}

export const isSubscribable = (value: any): value is Subscribable<unknown> => {
    return 'subscribe' in value && typeof value.subscribe === 'function';
}