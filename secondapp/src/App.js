import Allcomponents from "./components/AllComponents";
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Allcomponents />
       </BrowserRouter>
    </div>
  );
}

export default App;
