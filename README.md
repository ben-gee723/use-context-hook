# use-context-hook
 - Another useContext hook created from only React hooks!

#

## 0. Set-Up: `useMyContext.jsx` 
This section has already been established to create a function which:
 - the hook `useMyContext` takes an object as an argument where a name, the initital state and functions will be defined
 - the name will be use in conjunction with localStorage to persist the store (may be edited later to account for backage storage)
 - the initial context is initialised with `createContext`
 - a named export "ParentContext" Element which provides through a `Context.Provider` the context to its children, and lastly
 - the default export "store" which is a small function which calls on `useContext(IntitalContext)`

Which returns the ParentContext Element and store in an Array:
```jsx
import { createContext, useState, useEffect, useContext } from "react";

const useMyContext = ({name, init, functions}) => {
    const InitialContext = createContext();
    
    function ParentContext ({ children }){
        const ls = JSON.parse(localStorage.getItem(name));
        const initalState = ls ? ls: init;

        const [state, setState] = useState(initalState);
        
        useEffect(()=> {
        localStorage.setItem(name, JSON.stringify(state))
        }, [state])

        
        const value = [state, setState, functions];
        
        return (
            <InitialContext.Provider value={value}>
                {children}
            </InitialContext.Provider>
        )
    }

    const store = () => useContext(InitialContext);

    return [ParentContext, store];
}
```

#

## 1. Implmentation
 - The function `useMyContext` takes an object as an argument where the name, initital state and functions will be defined
 - It is structured so that the return value will give back the a ParentContext Element and the store, thanks to already being declared within the set-up

### Syntax:
```jsx
    const [<ContextName>, <StoreName>] = useMyContext({ init: {}, functions: {}})
```
Where:
 - `ContextName` - The name of the ParentContext Element
 - `StoreName` - The name of the store to be created
 - `useMyContext` - The hook called with the object as argument
 - `init` - the initial values stored in an object
 - `functions` - the functions also stored in an object

### Example: in `exampleStores.jsx`
 - After the calling of the hook, both the Context-Element and the store will be exported as named exports

```jsx
const [CounterContext, counterStore] = useMyContext({
    name: "counter",
    init: { counter: 0 },
    functions: {
        increase: (state, setState) => setState({...state, count: state.count + 1}),
        decrease: (state, setState) => setState({...state, count: state.count - 1}),
    } 
})

export { CounterContext, counterStore };
```

#

## 2. Wrap ParentContext
 - Like normal, the ParentContext Element will be wrapped around the desired children elements,
 - In the example below, it shows the ParentContext Element wrapped around the entire App Component

```jsx
import React from 'react'
import App from './App'

import { CounterContext } from './store/stores'

ReactDOM.createRoot(document.getElementById('root')).render(
    <CounterContext>
        <App />
    </CounterContext>
)
```

#

## 3.1 Usage - store import and declaration
 - Lastly, the store will be imported into the desired Component to be used

### Syntax 1: `store`
 - The Information from the store will be deconstructed in order to name and access the information, 
 - Very much like using useState from before,

Like so:
```jsx
const [state, setState, functions] = counterStore();
```

Where:
 - `state` - state of the store derived from the useState in the set-up
 - `setState` - setState function derived from the useState in the set-up
 - `functions` - the object of functions declared in the useMyContext argument

### Example:
- Since the functions are declared in an object, it is also possible to destructure only the necessary functions to be used
- it is unfortunately not possible to destructure the state value, since we will require that for the handlers (shown in a sec `;)` )

```jsx
import './styles/App.css'
import { counterStore } from './store/stores'

function App() {
  const [counter, setCounter, { increase, decrease }] = counterStore();

  return (
    // ...
  )
}

export default App
```

#

## 3.2 Usage - state and handlers

### Syntax 1: displaying the `state`
 - In order to display the information, we can can use dot notation
```jsx
    <h1>{counter.count}</h1>
```

### Syntax 2: `handler` functionss
 - The handler functions can be impleted shown below:

```jsx
    <button onClick={() => increase(counter, setCounter)}>Increase</button>
```

 - As you see, the function requires that 2 arguments to be parsed, namely; the state and the setState function, as callback functions (which links it back to the functions declared in the useMyContext)

#

### Example:
 - Here is an example of it in `exampleApp.jsx`

```jsx
import './styles/App.css'
import { counterStore } from './store/stores'

function App() {
  const [counter, setCounter, { increase, decrease }] = counterStore();

  return (
    <div className="App">
      <h1>{counter.count}</h1>
      <button onClick={() => increase(counter, setCounter)}>Increase</button>
      <button onClick={() => decrease(counter, setCounter)}>Decrease</button>
    </div>
  )
}

export default App;
```

#

## I hope this helps with your use of multiple contexts!
