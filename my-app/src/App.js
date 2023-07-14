import { useState } from "react";
import ShowData from "./ShowData";



function App() {
const [data, setData] = useState(["egy", "dhdjhd"])

const [sellectedContrie, setsellectedContrie] = useState(null)

const handler = (contre) => {
  console.log(contre)
  setsellectedContrie(contre)

}
  return (
    <div className="App">
      <h1>DATA</h1>
      <h3>contrie is {sellectedContrie}</h3>
      <ShowData handler={handler} data={data} />
    </div>
  );
}

export default App;
