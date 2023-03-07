import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IformView } from '../../assets/formview';
import { IValidates } from '../../modals/validates';
import createItem from '../../services/addContact';
import getContactById from '../../services/getContactById';
import getAllItems from '../../services/getContacts';
import updateContact from '../../services/updateContact';
import './formpage.css'
import { ValidateForm } from './formvalidator';
let validateForm: ValidateForm = new ValidateForm();
export function Formpage({ id, statesObj, setStatesObj }: { id: string, statesObj: { showFormpage: boolean, formInfo: IformView, selectedContact: any, showContactInfo: boolean, validates: IValidates }, setStatesObj: Function }) {
    const navigate = useNavigate();
    const [validates, setValidates] = useState<IValidates>({
        isNameValid: false,
        isEmailValid: false,
        isMobileValid: false
    })
    function handleChange(e: any) {
        let lableName = e.target.name;
        let formInfo = statesObj.formInfo;
        setStatesObj({ ...statesObj, formInfo: { ...formInfo, [lableName]: e.target.value } });
    }
    function submitHandler(e: any) {
        e.preventDefault();
        let isValidName: boolean, isValidEmail: boolean, isValidMobile: boolean;
        isValidName = validateForm.ValidateName(statesObj.formInfo.name);
        isValidEmail = validateForm.ValidateEmail(statesObj.formInfo.email);
        isValidMobile = validateForm.ValidateMobile(statesObj.formInfo.mobile);
        if (!isValidName && !isValidMobile && !isValidEmail) {
            if (statesObj.formInfo.action === "Add") {
                let newContact: any;
                newContact = { name: statesObj.formInfo.name.toString(), email: statesObj.formInfo.email, mobile: statesObj.formInfo.mobile, address: statesObj.formInfo.address, website: statesObj.formInfo.website, landline: statesObj.formInfo.landline }
                createItem(newContact).then((fulFilled)=>{
                    if(fulFilled){
                        getAllItems().then((items) => {
                            setStatesObj({ ...statesObj, contacts: items })
        
                        }).catch((msg) => { console.error(msg) })
                    }
                });
               navigate('/');
                let varForm: IformView = { ...statesObj.formInfo, name: "", id: "", mobile: "", address: "", email: "", website: "", landline: "" }
                setStatesObj({ ...statesObj, formInfo: varForm, showFormpage: false, showContactInfo: true, selectedContact: newContact });

            }
            else {
                let newContact: any;
                newContact = { Id: statesObj.selectedContact.Id, name: statesObj.formInfo.name, email: statesObj.formInfo.email, mobile: statesObj.formInfo.mobile, address: statesObj.formInfo.address, website: statesObj.formInfo.website, landline: statesObj.formInfo.landline }
                updateContact(newContact.Id, newContact).then((fulFilled)=>{
                    if(fulFilled){
                        getAllItems().then((items) => {
                            setStatesObj({ ...statesObj, contacts: items })
                        }).catch((msg) => { console.error(msg) }) 
                    }
                })
                navigate('/');
                let varForm: IformView = { ...statesObj.formInfo, name: "", id: "", mobile: "", address: "", email: "", website: "", landline: "" }
                setStatesObj({ ...statesObj, formInfo: varForm, showFormpage: false, showContactInfo: true, selectedContact: getContactById(newContact.Id) });
            }
        }
        else {
            setValidates({ isNameValid: isValidName, isEmailValid: isValidEmail, isMobileValid: isValidMobile });
        }
    }
    return (
        <div id="formpage-container">
            <form id="formpage" >
                <label htmlFor="name">Name<span className="mandatory" id="blankName">
                    {validates.isNameValid ? "Name Required" : "*"}
                </span></label><br />
                <input type="text" id="name" className="form-control" name="name" value={statesObj.formInfo.name} onChange={handleChange} />
                <br />
                <label htmlFor="email">Email<span className="mandatory" id="blankMail">
                    {validates.isEmailValid ? "Valid mail is made mandatory" : "*"}
                </span></label><br />
                <input type="email" id="mail" className="form-control" name="email" value={statesObj.formInfo.email} onChange={handleChange} />
                <div className="row">
                    <div className="col-4">
                        <label htmlFor="mobile">Mobile <span className="mandatory" id="blankMobile">
                            {validates.isMobileValid ? "Valid mobile Required" : "*"}
                        </span></label>
                    </div>
                    <div className="col-6">
                        <label id='landlinelabel' htmlFor="landline">Landline</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <input type="text" id="mobile" className="form-control" name="mobile" value={statesObj.formInfo.mobile} onChange={handleChange} />
                    </div>
                    <div className="col-5">
                        <input type="text" id="landline" className="form-control" name="landline" value={statesObj.formInfo.landline} onChange={handleChange} />
                    </div>
                </div>
                <label htmlFor="website">website</label><br />
                <input type="text" id="website" className="form-control" name="website" value={statesObj.formInfo.website} onChange={handleChange} />
                <label id="addressLabel" htmlFor="address">Address</label><br />
                <textarea id="address" className="form-control" name="address" value={statesObj.formInfo.address} onChange={handleChange}></textarea>
                <div className="row">
                    <div className="col-10"></div>
                    <div className="col-2">
                        {statesObj.formInfo.action == "Add" && <input type="button" id="subButton" value={statesObj.formInfo.action} className="addingBtn" onClick={submitHandler} />}
                        {statesObj.formInfo.action == "edit" && <input type="button" id="subButton" value={statesObj.formInfo.action} className="addingBtn" onClick={submitHandler} />}
                    </div>
                </div>
            </form>
        </div>
    )
}