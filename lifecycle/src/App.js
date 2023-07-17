import { useState } from "react";
import LifeCycleSample from "./LifeCycleSample";


const App = (props) => {

  const [color, setColor] = useState('red')

  return(
    <>
      <LifeCycleSample color={color}/>
      <button type="button" onClick={() => setColor("red")}>RED</button>
      <button type="button" onClick={() => setColor("black")}>BLACK</button>
    </>
  )
};

export default App;