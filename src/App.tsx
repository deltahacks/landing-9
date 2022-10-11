import { useState } from "react";
import Navigation from "./components/navigation/navigation";
import LandingPage from "./views/Landing";
import clouds from "../src/assets/Clouds.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="landingBG">
      <img src={clouds} className="absolute h-full w-full" alt="clouds"></img>
      <LandingPage />
    </div>
  );
}

export default App;
