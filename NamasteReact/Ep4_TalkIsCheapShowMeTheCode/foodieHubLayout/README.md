# Lecture-4: Talk Is Cheap, Show Me The Code

**Live Link:** [https://thriving-sawine-391701.netlify.app/](https://thriving-sawine-391701.netlify.app/)

## Contents

1. [React Props](#react-props)
2. [Passing Props to Component](#passing-props-to-component)
3. [Configuring UI](#configuring-ui)
4. [The Key Prop](#the-key-prop)
5. [Passing Props with Arrays](#passing-props-with-arrays)
6. [Dark/Bright Mode](#dark-bright-mode)
7. [SearchBar Component](#searchbar-component)
8. [Main Component](#main-component)
9. [Footer Component](#footer-component)
10. [Card Component](#card-component)
11. [Button Component](#button-component)
12. [Nav Component](#nav-component)
    - [NavLeft Component](#navleft-component)
    - [NavRight Component](#navright-component)

---

### React Props

React Props are essential for making websites dynamic by passing data between components. They serve as arguments to a component function and allow for the customization and reusability of components.

### Passing Props to Component

Props in React are passed as parameters to a component function. They are wrapped in an object called `props` and can be destructured for better readability. Props enable components to be versatile and adaptable to different data inputs.

```jsx
// Example of passing props to a component
import React from "react";

const Greeting = (props) => {
  return <h1>Hello, {props.name}!</h1>;
};

export default Greeting;
```

### Configuring UI

UI configurations control the appearance of a website based on various factors such as user preferences or backend data. React allows for dynamic UI adjustments by passing configuration data as props to components, ensuring a flexible and user-friendly interface.

### The Key Prop

The `key` prop in React is used to uniquely identify elements in a list. It helps React efficiently update and render components by identifying changes, additions, and removals. Keys should be unique among siblings to optimize performance.

### Passing Props with Arrays

Props can be passed as arrays to components, allowing for the dynamic rendering of multiple items. This approach enhances component flexibility and scalability, making it easier to manage and update large datasets.

```jsx
// Example of passing props as an array to a component
import React from "react";

const List = (props) => {
  return (
    <ul>
      {props.items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default List;
```

### Dark/Bright Mode

Dark/Bright mode functionality allows users to toggle between different color schemes based on their preference. This feature typically involves changing the background, text, and other UI elements to create a visually appealing experience in both light and dark environments.

### SearchBar Component

The SearchBar component comprises a search input field and a search button, providing users with a convenient way to search for content within the application.

### Main Component

The Main component serves as the primary content container of the application, housing components such as the SearchBar, CardContainer, and Footer. It orchestrates the layout and structure of the main content area.

### Footer Component

The Footer component displays a simple footer message at the bottom of the webpage, providing additional information or navigation options to users.

### Card Component

The Card component represents a card displaying information about a food item or restaurant. It showcases details such as name, cuisines, rating, image, distance, price, and locality, offering users valuable insights into available options.

### Button Component

The Button component is a reusable UI element that can be customized with different button names, styles, and click handlers. It enhances interactivity and user experience by providing intuitive controls for various actions.

### Nav Component

The Nav component serves as the navigation header of the application, consisting of the NavLeft and NavRight components. It facilitates seamless navigation between different sections or pages of the website, enhancing user accessibility and engagement.

#### NavLeft Component

The NavLeft component displays the logo or branding of the application, reinforcing brand identity and providing visual continuity across the website.

#### NavRight Component

The NavRight component handles navigation buttons, such as Home, About, Contact, and Cart, along with a toggle button for switching between light and dark modes. It offers users convenient access to essential functionalities and settings, improving overall usability and satisfaction.