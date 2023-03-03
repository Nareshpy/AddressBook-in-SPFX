import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./app/App";
import './index.css';
export default function Index(){
  return(
    <div>
    <BrowserRouter>
    <App />
    {/* <h1>Naresh</h1> */}
    </BrowserRouter>
    </div>
  )
}