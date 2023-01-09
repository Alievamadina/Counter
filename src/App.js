import React, { useState } from "react";
import './App.css'
const App = () => {
  const [count, setCount] = useState(0);
  const inc = () => {
    setCount(count + 1);
  };
  const dec = () => {
    if (count > 0) setCount(count - 1);
  };
  return (
    <div className="ayat">
      <h1>Субхан-Аллах <p/>
سُبْحَانَ ٱللَّٰهِ</h1>
<h1> {count}</h1>
      <button onClick={inc}>Считать</button>
      <div onClick={dec}>-</div>
    </div>
  );
};
export default App;
