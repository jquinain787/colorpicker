// Write your Color component here

import { useState } from 'react'

const Color = ({color, setSelectedColor}) => {
  return (
    <div 
      className={color} 
      onClick={() => setSelectedColor(color)} 
     ></div>
  )
}

const App = () => {
  const [selectedColor, setSelectedColor] = useState("")
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
        <div className="red">red</div>
      </div>
      <div id="colors-list">{<><Color color="blue" setSelectedColor={selectedColor}/><Color color="black" setSelectedColor={selectedColor}/><Color color="green" setSelectedColor={selectedColor}/></>}</div>
    </div>
  );
};

export default App;
