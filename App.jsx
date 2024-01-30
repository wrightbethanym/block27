import {useState} from "react"
import Authenticate from "./components/Authenticate";

function App() {
  const [token, setToken] = useState(null);
  return <>
  <SignupForm setToken={setToken}/>
  <Authenticate token={token}/>
  </>;
  
}

export default App
