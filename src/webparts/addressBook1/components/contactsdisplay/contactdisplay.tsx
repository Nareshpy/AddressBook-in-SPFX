import "./contactdisplay.css";
import { Formpage } from "../formpage/formpage";
import { Contactlist } from "../contactlist/contactlist";
import ContactInfo from "../contactinfo/contactinfo";
import { IformView } from "../../assets/formview";
import { IValidates } from "../validateinterface";
import { Route, Routes } from "react-router-dom";
import * as React from "react";
function ContactsDisplay({statesObj,setStatesObj,ContactInfoState}:{statesObj:{ showFormpage: boolean, formInfo: IformView, selectedContact: any,showContactInfo:boolean,validates:IValidates},setStatesObj:Function,ContactInfoState:Function}){
    
    return(<div id="contacts-display">
        <Contactlist ContactInfoState={ContactInfoState} statesObj={statesObj} setStatesObj={setStatesObj}/>
        <Routes>
        <Route path="/form/:Id" element={<Formpage id={statesObj.formInfo.id} statesObj={statesObj} setStatesObj={setStatesObj} />}/>
        <Route path={"/contact/:Id"} element={<ContactInfo newPerson={statesObj.selectedContact} statesObj={statesObj} setStatesObj={setStatesObj}/>}/>
        </Routes>  
    </div>)
}
export default ContactsDisplay;