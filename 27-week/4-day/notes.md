# React Router

With React we're making single-page applications: meaning we don't want full page reloads each time we change the browser location (the address at the top of a browser window). Instead we want to update the browser location and the DOM using only JS. This is known as client-side routing. We'll be using React Router to do this.

```jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";

const router = createBrowserRouter([
  { path: "/", element: <Home /> }, // route object
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
```

## Routes

- We define routes via route objects
  - We pass route objects into the array accepted by the `createBrowserRouter` function
  - Route objects are regular JS objects with the keys `path`, `element`, and `children`
    - `path`: the url path React Router is looking to match
    - `element`: the React functional component to render when react router matches the path

### Route Matching

- We don't need to worry about the order of our route objects
- React Router will rank all the routes based on the number of segments, static segments, dynamic segments, and splats(\*)
  - Given these rankings, it will then always choose the most specific match for a given path
- While a route path can have as many dynamic segments as needed, it can have only one splat, which must occur at the end of the path.

### Nested Routes

- We can define nested routes using the `children` key in a route object
- Notes on syntax for paths
  - children paths that don't start with `/` -> Router understands these paths are relative to their parents' path
  - paths that begin with `/` -> always absolute
  - putting a `/` at the end of a route -> optional and doesn't affect functionality

```jsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "teams",
    children: [
      {
        index: true, //index routes are pathless routes that render at the parent's URL (/teams here)
        element: <TeamsIndex />,
      },
      {
        path: ":teamId", // will render at /teams/:teamId
        element: <TeamDetails />,
      },
    ],
  },
]);
```

## Outlet Element

- React Router assigns a default element named `Outlet` to any route without an explicit element to render
  - Looking at the code snippet above, Router would be inserting `element: <Outlet />` to the route object with `path: 'teams'` since there's no element key
- All an `Outlet` component does is render the child route with the best match. If there is no child route--or no child route that matches--it simply renders null

```jsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "teams",
    element: (
      <>
        <TeamsIndex />  {/*The TeamsIndex component will render plus the element of any matching child route*/}
        <Outlet />
      </>
    ),
    children: [
      {
        path: ":teamId",
        element: <TeamDetails />,
      },
    ],
  },
]);
```

## Links + NavLinks

- To create a frontend link in React, use the `Link` component imported from react-router-dom

```jsx
<Link to="new">
  Create a Team!
</Link>
```

- When your JSX file is translated to plain JS, `Links` and `NavLinks` will be rendered as `<a>` tags
  - `Links`prevent the browser's default page-loading behavior and instead render the appropriate content according to the new path's most specific match in the React Router router
  - They also will also update the browser's history and location, as if the user had actually gone to a new page
- The key prop for a `Link` is `to`, which takes the new path for the link
  - The path can either be relative or absolute
  - Just like the `path` key in route objects, absolute paths start with a `/`

```jsx
<nav>
  <NavLink to='teams' end>Teams</NavLink>
  <NavLink to='teams/1'>Team #1</NavLink>
</nav>
```

- By default, a `NavLink` will append an "active" class to its link when its `to` prop matches the current URL
  - it will append a "pending" class when its to prop matches the URL that is currently loading
- Importantly, a `NavLink` defaults to active as long as its `to` prop matches the beginning of the current URL
  - To limit the active class to an exact match, use the `end` attribute

## Navigation

To navigate your app to a particular route, use the `Navigate` component in react-router-dom

```jsx
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';

const router = createBrowserRouter([
  { path: 'home', element: <Home /> },
  { path: 'teams', element: <Teams /> },
  { path: '*', element: <Navigate to='home' replace={true} /> } // Any url that isn't /home or /teams is going to match this and be re-directed to the home page
]);

function App() {
  return <RouterProvider router={router} />
}

export default App;
```

- `replace` is set to true so that the browser's back button will return the user to the last valid page visited
- The `Navigate` component is essentially a component wrapper around the `useNavigate` hook
- In portions of your code that do not render components, you can use the `useNavigate` hook directly to navigate to another page.

```jsx
import { useNavigate } from 'react-router-dom';

function MyForm() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    // Do something with the submitted data...
    navigate(`/home`);
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* The form ... */}
    </form>
  )
}
```

The `navigate` function can also take a numerical argument specifying the direction and number of steps to go in the browser's history
  - Ex: `navigate(-1)` to go back one page
