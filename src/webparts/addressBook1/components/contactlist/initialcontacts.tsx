import { AddingContact } from "../appendonecontact/appendonecontact"
import "./contactlist.css"
import { Link } from "react-router-dom"
import * as React from "react"
import { IValidates } from "../../modals/validates";
import { IformView } from "../../modals/formview";
export function  InitialContactsDisplay({statesObj,setStatesObj,ContactInfoState}:{statesObj:{showFormpage: boolean, formInfo: IformView, selectedContact: any, showContactInfo: boolean, validates: IValidates,contacts:any[]},setStatesObj:Function,ContactInfoState:Function}){
    return(<div id="contact-list">
       {statesObj.contacts.map((newPerson:any)=><Link to={'/contact/'+newPerson.Id}><AddingContact key={newPerson.id} ContactInfoState={ContactInfoState} statesObj={statesObj} setStatesObj={setStatesObj} newPerson={newPerson}></AddingContact></Link>)}
    </div>)
}
