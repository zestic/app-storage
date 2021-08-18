# AppStorage

### Initialize

Add the `createStore()` method to the top of index.tsx after the imports. If you want to make sure the name of the storage is unique, pass that name as a parameter `createStore('_zestic');`

### Useage

To store a value call the storeValue() function, passing in the name of the value and the value

`await storeValue('hello', 'world');`

To retrieve the value from the storage call

```
const value = await getValue('hello');

// value = 'world'
```

If a value has not been set, by default, a null value is returned.

If you want to set the default value, just pass it in as a second parameter.

```
const value = await getValue('doesNotExist', 'vanished');

// value = 'vanished'
```

To clear the set value, call `await clearValue('hello');`
