# Episode 6: Let's Explore the World

**Live Link:** [Splendorous Eclair](https://splendorous-eclair-8fbf02.netlify.app/)

## Contents

1. [Monolithic Architecture](#monolithic-architecture)
2. [Microservices Architecture](#microservices-architecture)
3. [Rendering API Data in Web Applications](#rendering-api-data-in-web-applications)
4. [useEffect Hook](#useeffect-hook)
5. [Shimmer UI](#shimmer-ui)
6. [Conditional Rendering](#conditional-rendering)
7. [Optional Chaining](#optional-chaining)
8. [New Work in Episode 6](#new-work-in-episode-6)
9. [Things Learned](#things-learned)

---

## Monolithic Architecture

In a monolithic architecture, all parts of an application are bundled together into a single program. This includes the user interface, business logic, and data storage, all tightly integrated and deployed as one unit.

### Characteristics:

- **Single Codebase**: Everything, like the front-end, back-end, authentication, and database, is in one codebase.
- **Tight Coupling**: Components are highly dependent, making it tough to change or scale them individually.
- **Scalability Challenges**: It's hard to scale because you have to scale the entire thing at once.
- **Development and Deployment Complexity**: Even small changes might mean redeploying the whole application, which takes time and can cause downtime.

### Example:

Think of a typical online store where the website, its functions, and the database are all in one big package.

---

## Microservices Architecture

Microservices architecture breaks down an application into small, independent services, each handling a specific task. These services can be developed, deployed, and scaled separately, using different technologies.

### Characteristics:

- **Decentralized Components**: The app is divided into small, standalone services, each doing its own job.
- **Service Autonomy**: Each service can be managed independently without affecting others.
- **Technology Diversity**: Services can use different programming languages and tools as needed.
- **Resilience and Fault Isolation**: If one service fails, it doesn't bring down the whole app.

### Example:

Picture a cloud-based app where services like user management, product listing, and payment processing are separate and talk to each other through APIs.

### How do these services interact with each other

- **Communication via APIs**: Services talk to each other using lightweight methods like HTTP or messaging.
- **Service Discovery**: They can find and connect to each other automatically.
- **Example Ports**: Each service listens on its own port, like /ui on port 1234 or /api on port 3000.

---

## Rendering API Data in Web Applications

When developing web applications that rely on external data from APIs, there are different approaches to rendering this data for the user. Here are two common approaches:

### 1. Load-Then-Render Approach:

- The webpage makes an API call as soon as it loads.
- It waits for the API response to come back with the data.
- Once the data is received, the webpage renders the UI with the API data.
- Sequence: Loads --> API (wait) --> Render
- This approach is straightforward but may result in slower initial loading times if the API call takes time to complete.

### 2. Render-Then-Update Approach:

- The webpage quickly renders the UI without waiting for API data.
- After rendering the initial UI, it makes an API call in the background.
- Once the API data is received, the UI is updated with the new data.
- Sequence: Loads --> Render --> API --> Re-render
- This approach provides a better user experience as the user sees the UI immediately, even if the data is still loading.
- Frameworks like React have efficient rendering cycles, making updating the UI with new data fast and seamless.

Choose the approach that best suits your application's requirements and user experience goals.

---

## useEffect Hook

- Named import from the React library.
- Syntax: Takes 2 arguments:
  - useEffect(callback Function, dependencyArray ([]))
  - Callback function called after component rendered (After completion of render cycle).
  - Called every time when its component rendered.
  - Dependency array: Not mandatory but used to change the behavior of useEffect.
    - `[]` called on initial render (just once).
    - `[dependency(variable)]` every time dependency is updated.

### Shimmer UI

Used in **Render-Then-Update Approach** in it firstly we just render a dummy UI before the actual is fetching and it creates a mental illusion for the user that the website is rendered.

### Conditional Rendering

Rendering based on the condition is known as conditional rendering.

### Optional Chaining

Always use optional chaining to prevent any error if you try to find out something in nested objects and if it is not available there, then you get an error. To avoid it, we generally use it. It is a core concept of JavaScript.

---

## New Work in Episode 6

- **Created Our Own API**: To continue with this project we moved to create our REST API and uploaded it on GitHub so that we got a better understanding of how data is fetched in a production level. If we really want to work in the industry, then we have to work with APIs. [API Link](https://kapilchaudharygithub.github.io/users-api-server/db.json)

- **Used Axios for Fetching Data**: For fetching data from our API we are working with the Axios library.

  ```JS
  import axios from "axios";

  const fetchData = async (setArr
  ```

,setFilteredArr) => {
try {
const response = await axios.get(
"https://kapilchaudharygithub.github.io/users-api-server/db.json"
);

      const arr =
        response.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      if (arr && arr.length > 0) {
        setArr(arr);
        setFilteredArr(arr);
        console.log("Rendered from API");
      } else {
        throw new Error("Empty response from API");
      }
    } catch (error) {
      console.log(error);
    }

};

export default fetchData;

```

- **Other Event Handlers Used**:

- `filterButtonOnClickHandler`: Handles filtering of data based on a button click.
- `textSearchInputHandler`: Handles input changes for text search.
- `textSearchOnClickHandler`: Handles search button clicks.
- `toggleDarkModeHandler`: Handles toggling dark mode.
- `toggleMenuHandler`: Handles toggling the menu.

---

## Things Learned

- Fetching data from a live API using Axios.
- Creating our own API.
- Error handling with try-catch.
- Using optional chaining to prevent errors.
- Best practices for rendering API data in web applications.
- Implementing conditional rendering in React.
- Working with useEffect hook for side effects in React components.
- Implementing event handlers for user interactions.

```
