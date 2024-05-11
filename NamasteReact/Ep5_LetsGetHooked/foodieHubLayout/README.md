# Ep-5 Let's Get Hooked

**Live Link:** [Food Fire](https://voluble-blancmange-922507.netlify.app/)

## Contents

1. [React Fiber](#reconciliation--react-fiber)
2. [useState](#usestate)
3. [CardContainer Component](#cardcontainer-component)
4. [Main Component](#main-component)

### React Fiber

React Fiber is a re-implementation of React's core algorithm. Its key feature is the ability to pause, abort, or reuse work during updates, leading to more efficient rendering.

- **GitHub Repository:** [acdlite](https://github.com/acdlite)

### `useState`

The `useState` hook is a fundamental hook in React used for adding state to functional components. It allows components to manage and update their state without using class components.

```javascript
import { useState } from "react";

const ExampleComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default ExampleComponent;
```

### CardContainer Component

The `CardContainer` component is responsible for rendering a container of cards, each displaying information about a food item or restaurant. It dynamically renders cards based on the data passed to it as props.

```javascript
import Card from "./Card";

const CardContainer = ({ isDarkMode, arr }) => {
  return (
    <div className={`flex justify-center w-full mt-3`}>
      <div
        className={`cardContainer w-full sm:w-[90vw] min-h-[80vh] flex gap-x-3 gap-y-2 justify-center items-center flex-wrap`}
      >
        {arr.map((data) => (
          <Card
            key={data.info.id}
            isDarkMode={isDarkMode}
            name={data.info.name}
            cuisines={data.info.cuisines}
            rating={data.info.avgRatingString}
            img={data.info.cloudinaryImageId}
            km={data.info.sla.lastMileTravelString}
            duration={data.info.sla.slaString}
            price={data.info.costForTwo}
            locality={data.info.locality}
            areaName={data.info.areaName}
          />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
```

### Main Component

The `Main` component serves as the primary content container of the application. It includes the `SearchBar`, `CardContainer`, and `Footer` components. Additionally, it demonstrates the usage of the `useState` hook for managing state and updating the component dynamically.

```javascript
import SearchBar from "./SearchBar";
import CardContainer from "./CardContainer";
import Footer from "./Footer";
import Button from "./Button";
import { DATA } from "./trial";
import { useState } from "react";

const Main = ({ isDarkMode }) => {
  const [arr, setArr] = useState(
    DATA.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
  );
  const [btnName, setBtnName] = useState("Filt_Restaurants");

  return (
    <main
      className={`w-[100vw] h-full border-t ${
        isDarkMode ? "bg-orange-400 " : "bg-gray-700"
      } mt-12 md:mt-16 overflow-y-auto`}
    >
      <div className={`w-[80vw] mt-4 flex justify-between wrap `}>
        <SearchBar isDarkMode={isDarkMode} />
        <Button
          buttonName={btnName}
          onClickHandler={() => {
            const originalArr =
              DATA.data.cards[1].card.card.gridElements.infoWithStyle
                .restaurants;
            const filteredArr = originalArr.filter(
              (data) => data.info.avgRating > 4
            );

            if (JSON.stringify(arr) === JSON.stringify(originalArr)) {
              setArr(filteredArr);
              setBtnName("All_Restaurants");
            } else {
              setArr(originalArr);
              setBtnName("Filt_Restaurants");
            }
          }}
          buttonClasses={`pl-3 pr-3 rounded-md text-base ${
            isDarkMode
              ? "bg-red-500 hover:bg-blue-300 text-gray-300 hover:text-gray-700"
              : "bg-blue-300 hover:bg-red-500 text-gray-700 hover:text-gray-300"
          }`}
        />
      </div>
      <CardContainer isDarkMode={isDarkMode} arr={arr} />
      <Footer isDarkMode={isDarkMode} />
    </main>
  );
};

export default Main;
```

In this episode, React Hooks like `useState` are utilized to streamline state management and enhance the interactivity of the application. The `Main` component showcases how these hooks can be effectively integrated to create dynamic and responsive web applications.

```

```
