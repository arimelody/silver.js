export default class Stateful {
    #value;
    #listeners = [];

    constructor(value) {
        this.#value = value;
    }

    /**
     * Returns the current value.
     */
    get() {
        return this.#value;
    }

    /**
     * Sets the stateful value.
     * @param {any} value
     */
    set(value) {
        let prev = this.#value;
        this.#value = value;
        for (let i in this.#listeners) {
            this.#listeners[i](value, prev);
        }
    }

    /**
     * Sets the stateful value based on the return value
     * of the provided function.
     * 
     * Example:
     * ```
     * const data = new Stateful(0);
     *
     * console.log(data.get()); // 0
     *
     * data.update(value => value + 1);
     *
     * console.log(data.get()); // 1
     * ```
     *
     * @param {function} func
     */
    update(func) {
        this.set(func(this.#value));
    }

    /**
     * Attaches a listener function, which is run whenever
     * the stateful value is updated.
     * @returns The provided listener.
     */
    onUpdate(listener) {
        this.#listeners.push(listener);
        return listener;
    }

    /**
     * Removes a listener from the stateful object.
     */
    removeListener(listener) {
        this.#listeners = this.#listeners.filter(l => l !== listener);
    }
}
