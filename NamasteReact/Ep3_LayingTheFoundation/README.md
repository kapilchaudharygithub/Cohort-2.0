# Lecture-3: Laying the Foundation

## Contents

1. [Moving to JSX instead of `createElement`](#moving-to-jsx-instead-of-createelement)
2. [React Components](#react-components)
3. [React Functional Component](#react-functional-component)
4. [Component Composition](#component-composition)
5. [Executing JS Inside JSX](#executing-js-inside-jsx)
6. [Including React Elements Inside React Components](#including-react-elements-inside-react-components)
7. [JSX Prevents Cross-Site Scripting (XSS) Attacks](#jsx-prevents-cross-site-scripting-xss-attacks)

In this lecture, we'll delve into essential concepts that form the bedrock of React development. Below are key topics covered, along with helpful links for further understanding:

### Moving to JSX instead of `createElement`

**[JSX](https://reactjs.org/docs/introducing-jsx.html)**

- JSX stands for JavaScript XML, facilitating the combination of HTML markup with JavaScript logic.
- It merges HTML and JS seamlessly, a convention adopted by most modern libraries and frameworks.
- JSX resembles HTML/XML syntax but is transpiled by Babel before reaching the JS engine.
- Babel, along with JSX, transpiles ES6 code to older versions for broader compatibility.

**_JSX attributes utilize camelCase syntax._**

- When JSX spans multiple lines, it's advisable to wrap it in parentheses.

### React Components

1. **[Class Based Component](https://reactjs.org/docs/components-and-props.html#function-and-class-components):** The traditional approach.
2. **[Functional Component](https://reactjs.org/docs/components-and-props.html#function-and-class-components):** The contemporary method, utilizing JavaScript functions.

### React Functional Component

- Simply put, it's a JavaScript function that returns a JSX or React element.
- Remember, functional component names should always begin with a capital letter.

Example:

```JavaScript
const App = () => {
    return <h1>It is a functional component</h1>
}
```

### Component Composition

This involves embedding one component within another.

Example:

```JavaScript
const element = (
  <div className="container">
    <App />
    <h1 id="headingS">This is an H1 written in JSX</h1>
  </div>
);
```

### Executing JS Inside JSX

Enclose JavaScript expressions within curly braces `{}` to execute them within JSX.

Example:

```JavaScript
const number = 1000;
 <div className="container">
 {number}
    <App />
    <h1 id="headingS">This is H1 written in JSX</h1>
  </div>
);
```

### Including React Elements Inside React Components

Example:

```JavaScript
const title = <h1>It's my title<>;
const Container = () => (
  <div className="container">
   {title}
    <App />
    <App /><App/>
    {
        App()
    }
    {/** All above 3 lines are the same **/}
   </div>
)
```

### JSX Prevents Cross-Site Scripting (XSS) Attacks

- JSX plays a crucial role in mitigating XSS attacks by sanitizing and executing only safe code.
- This feature ensures that potentially harmful code doesn't compromise data or systems.
- JSX enhances code readability, a fundamental aspect of React development.
