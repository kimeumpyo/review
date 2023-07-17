import { useState } from "react";
import ColorSelect from "./ColorSelect";

function App(){

  const [color, setColor] = useState(null);

  const style = {
    width: 500,
    height: 500,
    border : "1px solid #000",
    background : color
  };

  if (color) style.color = color;
  
  return (
    <>
      <div style={style}></div>
      <ColorSelect setColor={setColor}></ColorSelect>
    </>
  );
};

export default App;
