import * as React from "react";
import { HashRouter } from "react-router-dom";
import App from "./app/App";
import './index.css';
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
export default function Index(){
  return(
    <div>
    <HashRouter>
    <App />
    </HashRouter>
    </div>
  )
}
