// import axios from "axios"
// import React,{useEffect} from "react";
import Browse from "./components/Browse";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Details from "./components/Details";
function App() {
  
  return (
    <>
    <BrowserRouter>
    <div className="bg-slate-800 flex justify-center w-100 h-[100vh]">
      <Routes>
        <Route exact path="/" element={ <Browse/>}/>
        <Route exact path="/details" element={ <Details/>}/>
      </Routes>
     
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
