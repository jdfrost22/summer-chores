# summer-chores

# Summer Chores - Callback Version

This project simulates summer chores completed in order using asynchronous callback functions.

## File: `callbackVersion.js`

### Purpose

Model of a real life scenario to demonstrate the use of callback functions to handle operations that take a certain amount of time in a specific order.

### Chore Sequence

1. Mow the yard - 2s
2. Weed eat - 1.5s
3. Trim Hedges - 1s
4. Collect wood - 2.5s
5. Water the garden - 0.5s

Chores are performed in order. there is a randomized chance that the person will fall asleep before completeing a chore which stops the sequence.

### Function Breakdown

- `mowYard(name, callback)`
- `weedEat(name, callback)`
- `trimHedges(name, callback)`
- `collectWood(name, callback)`
- `waterGarden(name, callback)`
- `doSummerChores(name)`: Starts the process and logs success only if all chores are completed.

### How to Run

This script can be run with Node.js:

```bash
node callbackVersion.js
```

Try running it multiple times to observe different outcomes due to the random "falling asleep" logic.


---

# Summer Chores - Promise Version

## File: `promiseVersion.js`

### Purpose

This version uses Promises instead of callbacks and uses `.then()` chaining to make the sequence of summer chores.

### Function Breakdown

- `mowYard(name)`
- `weedEat(name)`
- `trimHedges(name)`
- `collectWood(name)`
- `waterGarden(name)`
- `doSummerChores(name)`: Starts the Promise chain and logs success only if all chores are completed.

### How to Run

This script can also be run with Node.js:

```bash
node promiseVersion.js
```


---

# Summer Chores - Async/Await Version

## File: `asyncAwaitVersion.js`

### Purpose

This version uses `async/await` to handle asynchronous functions in a more readable way than chained promises or callbacks.

### Function Breakdown

- `mowYard(name)`
- `weedEat(name)`
- `trimHedges(name)`
- `collectWood(name)`
- `waterGarden(name)`
- `doSummerChores(name)`: Uses async/await to run all chores in order and log success only if all chores are completed.

### How to Run

```bash
node asyncAwaitVersion.js
```