import CardShimmer from "./components/globalComponents/cards/CardShimmer.jsx";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import React, { useState } from "react";
import Error from "./components/globalComponents/Error.jsx";
import Main from "./components/main/Main.jsx";
import Cart from "./components/cart/Cart.jsx";
import About from "./components/about/About.jsx";
import Contact from "./components/contact/Contact.jsx";

const RoutingPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false); // Define isDarkMode state

  // const appRouter = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <App isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />, // App component does not need isDarkMode prop here
  //     children: [
  //       {
  //         path: "",
  //         element: <Main isDarkMode={isDarkMode} />, // Main component does not need isDarkMode prop here
  //         errorElement: <Error />,
  //       },
  //       {
  //         path: "/about",
  //         element: <About />,
  //       },
  //       {
  //         path: "/cart",
  //         element: <Cart />,
  //       },
  //       {
  //         path: "/contact",
  //         element: <Contact />,
  //       },
  //     ],
  //   },
  // ]);

  const appRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<App isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />}
        errorElement={<Error />}
      >
        <Route path="" element={<Main isDarkMode={isDarkMode} />} />
        <Route path="board" element={<About />}></Route>
        <Route path="cart" element={<Cart />}></Route>
        <Route path="contact" element={<Contact />}></Route>
      </Route>
    )
  );
  return (
    <React.StrictMode>
      <RouterProvider router={appRouter}></RouterProvider>
    </React.StrictMode>
  );
};

export default RoutingPage;
