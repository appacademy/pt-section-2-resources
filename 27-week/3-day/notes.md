# React

## Background

- Developed by Facebook circa 2013
- Very popular
- Largely *unopinionated* but it does have some rules you have to follow
- Uses JSX (JavaScript eXtension) and a virtual DOM

## JSX

- Looks a lot like a JavaScript and HTML had a baby
- Browsers can't understand JSX, so you have to use tools like Babel to "translate" JSX into JavaScript
- Curly braces in JSX indicate regular JavaScript code that should be evaluated

```jsx
const firstLink = "/pets";
const showLink = false;

const navList = (
  <ul>
    <li className="selected">
      <a href={firstLink}>Pets</a>
    </li>
    {/* Only show second link if showLink is true */}
    {showLink && (
      <li>
        <a href="/owners">Owners</a>
      </li>
    )}
  </ul>
);
```

A few quick JSX rules

- Must have a single root element
- No self-closing tags like in HTML
- Almost always uses camelCase (e.g. className, onClick...)

## Setting up React

```jsx
// Get a real DOM node for React to render into
const mainElement = document.querySelector('main');

// Render the element tree into the created root
ReactDOM.createRoot(mainElement).render(
  <ul>
    <li className="selected">
      <a href="/pets">Pets</a>
    </li>
    <li>
      <a href="/owners">Owners</a>
    </li>
  </ul>
);
```

## Functional Components

- A React function component is a function that returns a single JSX element (which may have other JSX elements nested inside).
- The name is PascalCase by convention

```jsx
function NavBar() {
  return (
    <nav>
      <h1>Pet App</h1>
      <ul>
        <li className="selected">
          <a href="/pets">Pets</a>
        </li>
        <li>
          <a href="/owners">Owners</a>
        </li>
      </ul>
    </nav>
  );
}
```

Returning nothing from a functional component: returning undefined will cause errors

```jsx
const str = "hello";

function ExampleComponent() {
  if (str === "hello") return null;
  else return (
    <div>World!</div>
  )
}
```

Conditional rendering patterns:

```jsx
function ConditionalRender({ condition }) {
  return (
    <>
      {condition ?
        <h1>Shows when condition is truthy.</h1> :
        <h1>Shows when condition is falsy.</h1>
      }

      {condition &&
        <p>You will see this only if condition is truthy.</p>
      }
    </>
  );
}
```

## React Fragments

```jsx
import React from 'react';

function MyComponent() {
  return (
    <React.Fragment>
      <h1>Abraham Lincoln</h1>
      <p>Abraham Lincoln was the 16th President of the United States.</p>
    </React.Fragment>
  );
}


function MyOtherComponent() {
  return (
    <>
      <h1>Abraham Lincoln</h1>
      <p>Abraham Lincoln was the 16th President of the United States.</p>
    </>
  );
}
```

## Passing Data Between Nested Components: Props

```jsx
// NavBar.jsx

import NavLinks from "./NavLinks";

function NavBar() {
  const world = "world";
  return (
    <nav>
      <h1>Pet App</h1>
      <NavLinks hello={world} color="green"/>
    </nav>
  );
}

// NavLinks.jsx
function NavLinks({ hello, color }) {
  return (
    <ul>
      <li>
        <a href="/hello">{hello}</a>
      </li>
      <li className="selected">
        <a href="/pets">Pets</a>
      </li>
      <li>
        <a href="/owners">Owners</a>
      </li>
    </ul>
  );
}
```

Props should never be changed within the child component!

## Lists in React

```jsx
function InstructorsList () {
  const instructors = [
    { id: 1,
      name: "Mike",
      location: "San Francisco"
    },
    { id: 2,
      name: "Darren",
      location: "San Francisco"
    },
    { id: 3,
      name: "Spencer",
      location: "New York"
    },
    { id: 4,
      name: "Amin",
      location: "New York"
    }
  ];

  const instructorListItems = instructors.map(({id, name, location}) => {
    return <li key={id}>{name}, {location}</li>;
  });

  return <ul>{instructorListItems}</ul>;
}
```

## Creating a React App using Vite

```bash
npx tiged appacademy/aa-react18-vite-template#main <new-project-name>
```