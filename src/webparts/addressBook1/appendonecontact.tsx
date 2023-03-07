import "./components/appendonecontact.css";
import * as React from "react";
export function AddingContact({statesObj,setStatesObj,newPerson,ContactInfoState}: {statesObj:any,setStatesObj:Function, newPerson: any,ContactInfoState:Function }) {
       
       return (<div className="singleContact" id={newPerson.Id} onClick={(e) => ContactInfoState(e.currentTarget.id)}>
        <h1 className='Name'> {newPerson.name} </h1>
        <p className='Mail'> {newPerson.email} </p>
        <p className='Mobile'> {newPerson.mobile} </p>
    </div>)
}

