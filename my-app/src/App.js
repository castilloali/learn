
import React, { useSelector} from "react-redux";

function App() {



  const data = useSelector(state => state.count )

  console.log(data)

  return (
    <div className="App">
      <h3>Counter : </h3>
      <button>+</button>
      <button>-</button>
      <button>0</button>
    </div>
  );
}

export default App;
