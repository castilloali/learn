import { useContext, useState } from "react"; 
import { colorContext  } from "./components/UseContextProvider";




function App() {
const data = useContext(colorContext)

const [text, settext] = useState(data) 

settext("test")
console.log(text)

  return (
    <div className="App">
      <input type="text" />
      <button >reggregr</button>
    </div>
  );
}

export default App;
