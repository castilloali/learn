
import { useRef, useEffect } from "react";
function App() {
  const value = useRef(null)

  const foucs = () => {
    value.current.focus()
    console.log(value.current.value)
  }




  return (
    <div className="App">
      <input type="text" ref={value} />
      <button type="button" onClick={foucs} > cewfefw</button>
    </div>
  );
}

export default App;
