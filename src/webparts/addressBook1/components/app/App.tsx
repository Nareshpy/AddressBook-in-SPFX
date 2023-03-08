import * as React from 'react';

import ContactsDisplay from '../contactsdisplay/contactdisplay';
import { Header } from '../header/header';
import { NavbarFunction } from '../navbar/navbar';
import Title from '../title/title';
import './App.css';
import {useEffect, useState} from 'react'
import getContactById from '../../services/getContactById';
import getAllItems from '../../services/getContacts';
import { IValidates } from '../../modals/validates';
import { IformView } from '../../modals/formview';
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
    getAllItems().then((items)=>{
      setStatesObj({...statesObj,contacts:items})
    }).catch((msg)=>{console.error(msg)})
  },[])
  function gettingContactfromPrmosie(id:string){
    getContactById(id).then((person)=>{
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
