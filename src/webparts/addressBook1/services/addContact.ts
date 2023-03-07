import { sp } from "@pnp/sp";
import { IPerson } from "../modals/contactStructure";

const createItem = async (newPerson:IPerson) => {
    try {
      return await sp.web.lists.getByTitle("Contacts").items.add({
        'name': newPerson.name,
        'mobile': newPerson.mobile,
        'email': newPerson.email,
        'landline': newPerson.landline,
         'address': newPerson.address,
        'website': newPerson.website,  
      }).then(()=>{return true})
       }
    catch (e) {
      console.error(e);
    }
  }
export default createItem;