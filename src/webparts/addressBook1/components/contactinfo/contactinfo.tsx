import "./contactinfo.css"
import { useNavigate } from "react-router-dom";
import * as React from "react";
import deleteDetails from "../../services/deleteContact";
import getAllItems from "../../services/getContacts";
import { IformView } from "../../modals/formview";
export default function ContactInfo({ setStatesObj, statesObj, newPerson }: { setStatesObj: Function, statesObj: any, newPerson: any }) {
    const navigate = useNavigate();
    function handleEdit() {
        let varForm: IformView;
        varForm = { ...statesObj.selectedContact, action: "edit" }
        setStatesObj({ ...statesObj, formInfo: varForm, showFormpage: true, showContactInfo: false })
        navigate('/form/' + statesObj.selectedContact.Id);
    }
    function handleDelete() {
        deleteDetails(statesObj.selectedContact.Id).then((fulFilled)=>{
        if(fulFilled){
            getAllItems().then((items) => {
                setStatesObj({ ...statesObj, contacts: items })
            }).catch((msg) => { console.error(msg) })}
        })
        setStatesObj({ ...statesObj, showFormpage: false, showContactInfo: false })
        navigate('/');
    }
    return (
        <div className="contactInfo">
            <div className="nameBar">
                <h1 id="detailedName">{newPerson.name}</h1>
                <div className="center">
                    <div className="modifyBar">
                        <div className="modify" id="edit">
                            <img id="editICon" className="editSymbol" src={require("../../assets/Edit-icon.png")} />
                            <a className="btn" onClick={() => handleEdit()}>EDIT</a>
                        </div>
                        <div className="modify" id="delete">
                            <img className="deleteSymbol" src={require("../../assets/delete1.png")} />
                            <a className="btn" onClick={() => handleDelete()}>DELETE</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="details">
                <div id="maildiv" className="sameline content">
                    <p>Email:</p>&nbsp;
                    <pre className="infer" id="detailedEmail">{newPerson.email}</pre>
                </div>
                <div id="mobdiv" className="sameline content">
                    <p>Mobile:</p>&nbsp;
                    <pre className="infer" id="detailedMobile">{newPerson.mobile}</pre>
                </div>
                <div id="landlinediv" className="sameline">
                    <p>Landline:</p>&nbsp;
                    <pre className="infer" id="detailedLandline">{newPerson.landline}</pre>
                </div>
                <div id="webdiv" className="sameline content">
                    <p>Website:</p>&nbsp;
                    <pre className="infer" id="detailedWebsite">{newPerson.website}</pre>
                </div>
                <div id="addressdiv" className="sameline content">
                    <p>Address:</p>&nbsp;
                    <pre className="infer" id="detailedAddress">{newPerson.address}</pre>
                </div>
            </div>
        </div>
    )
}