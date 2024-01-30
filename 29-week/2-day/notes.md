# Functional Component Appreciation Day!

## AKA Class Components

- React v16 (released in 2017) introduced React hooks (i.e. useState, useEffect)
  - Before this, to achieve the same functionality that useState and useEffect provide, developers had to use class components

```js
import React from "react";

class ClassComponent extends React.Component {
  // class components needs to extend React.Component
  constructor(props) {
    super(props); // must be called if creating a constructor method

    // Initialize the component state inside the constructor as an object with key/value pairs
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    // runs after the initial render
    setTimeout(() => {
      this.setState({ count: 5 }); // We have to call the setState method to update our state object
    }, 5000);
  }

  componentDidUpdate(prevProps, prevState) {
    // runs after every re-render after the initial render
    if (prevState.count !== this.state.count) {
      console.log("hello world!");
    }
  }

  componentWillUnmount() {
    // runs before the component is removed from the DOM
    console.log("cleanup");
  }

  render() {
    // the render method returns the jsx for the component itself
    return (
      <>
        <h1>{this.props.title}</h1> {/* <- how we access props from within a class component */}
        <div>{this.state.count}</div> {/* <- how we access state variables from within a class component */}
        <button
          onClick={() => this.setState((state) => ({ count: state.count + 1 }))}
        >
          Increment
        </button>
      </>
    );
  }
}
```

That same component as a functional component:

```js
import { useState, useEffect } from 'react';

function FunctionComponent({ title }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount(5);
    }, 5000);
    return () => console.log('cleanup');
  }, []);

  useEffect(() => {
    console.log('hello world!');
  }, [count]);

  return (
    <>
      <h1>{title}</h1>
      <div>{count}</div>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        Increment
      </button>
    </>
  );
}
```
