import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import Header from "./Components/Header/Header";
import Contact_form from "./Components/Contact-Form/Contact_form"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navigation />
      <Header/>
      <Contact_form/>
    </>
  );
}

export default App;
