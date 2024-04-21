import React , { useState } from "react";
import "./App.css";
import Input from "./Input";
import PostalData from "./PostalData";



function App () {
    const [loader , setLoader] = useState(false);

    const [searchParam , setSearchParam] = useState(null);
    const [response , setResponse] = useState(null);
    const [isFetch , setIsFetch] = useState(false);

  return (
    <div className="appContainer">
          { !isFetch ? (
            <Input 
              setLoader={setLoader} s
              setSearchParam={setSearchParam} 
              setResponse={setResponse} 
              setIsFetch={setIsFetch}
          />
          ) : (
            <PostalData searchParam = {searchParam} response = {response} />
          ) }

          {loader && (
             <center>
               <div className = "loader"></div>

             </center>
          )}
    </div>
  );
}

export default App;
