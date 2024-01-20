# React Hooks: UseState and UseEffect

2 important rules for using hooks:

1. Hooks can appear only in React functional components - they cannot appear in class components or generic JS functions
2. Hooks must be called at the top level of the function: not inside loops, conditional statements, or nested functions

## UseState

- A state variable is a kind of variable that causes re-renders when it changes.
  - Can hold any type of value: number, string, object, array
- Defined and updated within a component, like a regular local variable (a variable declared above the `return` in a functional component)
  - Unlike a regular local variable, a state variable will maintain its value between renders
  - Note: state values do *not* persist after reloading the page

```jsx
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  /// ...

}
```

- `count`: "Getter" -> it gets the value saved to the variable named count. Initialized to whatever value is inside the useState() function call (0 in the code above)
- `setCount`: "Setter function" -> function used to update the value of `count`
  - Note, however, that a setter function does not update its variable instantaneously
    - React batches state updates, grouping them together so it can perform multiple updates at once (which is more efficient and helps reduce the number of re-renders required)

## UseEffect

- A function that runs *after* the first render and any time an item in its dependency array changes on a re-render.

```jsx
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Code to run **after** the component has rendered
  });

  return <> ... </>;
}
```

- The dependency array is an optional second argument that specifies values that are being watched for changes
  - A dependency array should include all reactive values on which the useEffect depends.
    - Reactive values include any values that come from the React component: state, props, and any variables or functions declared inside the component.
