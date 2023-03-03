import * as React from 'react';
import { IformView } from '../../assets/formview';
import { IPerson } from '../../icontact';
import ContactsDisplay from '../contactsdisplay/contactdisplay';
import { Header } from '../header/header';
import { NavbarFunction } from '../navbar/navbar';
import { Services } from '../services';
import Title from '../title/title';
import { IValidates } from '../validateinterface';
import './App.css';
import {useState} from 'react'
let contactServices: Services = new Services();
function App() {
  const [statesObj, setStatesObj] = useState<{ showFormpage: boolean, formInfo: IformView, selectedContact: IPerson, showContactInfo: boolean, validates: IValidates }>({
    showFormpage: false, formInfo: {
      action: "Add",
      id: "",
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
    }
  })
  const ContactInfoState = (id: string) => {
    setStatesObj({ ...statesObj, showFormpage: false, showContactInfo: true, selectedContact: contactServices.getContactById(id) });
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
