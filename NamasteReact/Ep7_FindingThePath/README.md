# Episode 7: Finding The Path

## Go Deeper in the Hooks

### useEffect

- **Behavior Variations**:

  1. No dependency
  2. Empty dependency
  3. Data in dependency

- **Named Import**: Imported from the React library.
- **Usage**: Called with 2 arguments (callback function, dependency array `[]`).
- **Invocation**: Executed every time the component renders.

```JS
useEffect(()=>{
  console.log("useEffect Called")
},[])
```

- **Dependency Array**: Modifies useEffect's behavior (optional).
- **No Dependency Array**: Calls useEffect on every component render.

```JS
useEffect(()=>{
  console.log("useEffect Called")
})
```

- **Empty Dependency Array (`[]`)**: useEffect called only on initial render.

```JS
useEffect(()=>{
  console.log("useEffect Called")
},[])
```

The default behavior of useEffect is to execute after each render. By providing a dependency array, it's called once. With an item in the array, it runs when that dependency changes.

```JS
useEffect(()=>{
 console.log("useEffect Called")
},[btnName])
```

Now, it's triggered every time `btnName` updates.

### useState

- **Scoping**: Never place outside a component.
- **Usage**: Always within a functional component's body.
- **Purpose**: Local state variable creation.
- **Best Practice**: Prefer top-level placement for consistency.

- **Avoid**: Nesting inside conditionals, loops, or functions.

## Routing

going to learn how we can create different routes inside our react app.

- import library: react-router-dom

```
npm i react-router-dom
```

now to use it , we have to create a routing configuration(some info that will define what will happen on a specific route/path) and we can create it using

```
import {createBrowserRouter} from "react-router-dom"

//at end , after component
const appRouter=createBrowserRouter(
  [
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/about",
      element:<About/  >
    }
  ]
);
```

createBrowserRouter();

- takes a list of path (array of objects)

- but just creating configuration won't work, we'll have to pass this configuration to pass to render it on to the page

```
import { RouterProvider} from "react-router-dom"

```

RouterProvider

- used to provide routing configuration to our App;

```Before
root.render(<App/>)
```

```Now
root.render(<RouterProvider router={appROuter} >)
```

## react-router-dom

has lot of routers but reconmended by him itself is
**createrBrowserRouter **

### Handling wrong routes

if you try to access any random route which is not available then it itself gives up a **Unexpected Application Error** Page

- By the way it looks cool(from the sode of react-router-dom) but we have to handle it from our side and we can show our own Error page."Route not found"

```
import {createBrowserRouter} from "react-router-dom"

//at end , after component
const appRouter=createBrowserRouter(
  [
    {
      path:"/",
      element:<Home/>,
      errorElement:<Error/>
    },
    {
      path:"/about",
      element:<About/  >
    }
  ]
);
```

```

const Error=()=>{
  return (
    <p>OOPS Something went wrong</p>
  )
}
```

#### useRouteError

used to show more detailed info about the error

```
import {useRouteError} from "react-router-dom"
const Error=()=>{
  const err=useRouterError();

  return (
    <p>OOPS Something went wrong</p>
    <p>{err.status}:{error.statusText}</p>
  )
}
```






import CardShimmer from "./components/cards/CardShimmer.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/Error.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [],
  },
  {
    path: "/about",
    element: <CardShimmer />,
  },
]);
