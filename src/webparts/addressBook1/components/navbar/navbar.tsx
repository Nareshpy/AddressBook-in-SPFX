import "./navbar.css";
import { IformView } from "../../assets/formview";
import { Link } from "react-router-dom";
import * as React from "react";
import { images } from "../../assets/images";
export function NavbarFunction({ statesObj, setStatesObj }: { statesObj: any, setStatesObj: Function }) {
  let varForm:IformView={...statesObj.formInfo,action:"Add",name:"",id:"",mobile:"",address:"",email:"",website:"",landline:""}
  return (<div>
    <nav>
      <div className="navigation">
        <div className="navlinks">
          <div id="home" className="navigationitem">
          <Link to="/" >HOME</Link>
          </div>
          <div className="navigationitem">
            <button id="addBtn" onClick={() => setStatesObj({...statesObj,showFormpage:true,showContactInfo:false,formInfo:varForm})}>
           <Link to='/form/new'> +ADD </Link></button>
          </div>
        </div>
        <div className="blogimage"><img src={images.blogIcon} alt="react logo" /></div>
      </div>
    </nav>
  </div>)
}