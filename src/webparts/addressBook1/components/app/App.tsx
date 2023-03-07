import * as React from 'react';
import { IformView } from '../../assets/formview';
import ContactsDisplay from '../contactsdisplay/contactdisplay';
import { Header } from '../header/header';
import { NavbarFunction } from '../navbar/navbar';
import { Services } from '../services';
import Title from '../title/title';
import { IValidates } from '../validateinterface';
import './App.css';
import {useEffect, useState} from 'react'
let contactServices: Services = new Services();
function App() {
  const [statesObj, setStatesObj] = useState<{ showFormpage: boolean, formInfo: IformView, selectedContact: any, showContactInfo: boolean, validates: IValidates,contacts:any[] }>({
    showFormpage: false, formInfo: {
      action: "Add",
      id:"",
      name: "",
      email: "",
      mobile: "",
      address: "",
      website: "",
      landline: ""
    },
    selectedContact: {
      id: "",
      name: "",
      email: "",
      mobile: "",
      address: "",
      website: "",
      landline: ""
    }, showContactInfo: false,
    validates: {
      isNameValid: false,
      isEmailValid: false,
      isMobileValid: false
    },contacts:[]
  })
  useEffect(()=>{
    contactServices.getAllItems().then((items)=>{
      setStatesObj({...statesObj,contacts:items})
    }).catch((msg)=>{console.error(msg)})
  },[])
  
  function gettingContactfromPrmosie(id:string){
    contactServices.getContactById(id).then((person)=>{
      setStatesObj({...statesObj,showFormpage:false,showContactInfo:true,selectedContact:person})
    })
  }
  
  const ContactInfoState = (id: string) => {
    gettingContactfromPrmosie(id);
    }
  return (
    <div>
      <Header />
      <NavbarFunction statesObj={statesObj} setStatesObj={setStatesObj} />
      <Title />
      <ContactsDisplay ContactInfoState={ContactInfoState} statesObj={statesObj} setStatesObj={setStatesObj} />
    </div>
  );
}

export default App;
