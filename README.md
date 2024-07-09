# Silver.js

Silver is a simple state management library, built to function similarly to the
state management used in Svelte.

## How does it work?

Starting with Silver is as simple as importing the library and creating a
Stateful object, like so:

```js
import Stateful from "./silver.js";

const count = new Stateful(0);

console.log(count.get()); // 0
```

We can respond to changes in the stateful value easily using onUpdate():

```js
let listener = count.onUpdate(value => {
    alert(`Count updated! ${value}`);
});
```

Your listener functions will be called whenever the value is changed:

```js
count.set(5); // Count updated! 5

count.update(value => value + 10); // Count updated! 15
```

Of course, you can remove your listeners as follows:

```js
count.removeListener(listener);

count.set(5); // ...
```

And that's all there is to know about Silver! It's dead-simple, and can be used
in a wide variety of applications.

## Demo

Below is a simple example for building a responsive counter button with Silver:

```js
import Stateful from "./silver.js";

const demoButton = document.getElementById("button");
const count = new Stateful(0);
demoButton.textContent = "Count: " + count.get();

let listener = count.onUpdate(value => {
    demoButton.textContent = "Count: " + value;
});

demoButton.addEventListener("click", event => {
    event.preventDefault();
    count.update(value => value + 1);
});
```
