import { useState } from "react";
import Input from "./Input.js";

const App = () => {
    const [loader , setloader] = useState(false);
    const [searchPAram , setSearchPAram] = useState(null);
    const [response , setResponse] = useState(null);

  return (
    <Input setloader={setloader} setSearchPAram={setSearchPAram} setResponse={setResponse}/>
  );
};

export default App;
