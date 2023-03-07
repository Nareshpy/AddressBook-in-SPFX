import { IPerson } from "../assets/icontact";

import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";

export class Services {
   
    async deleteDetails(id: string): Promise<boolean> {
       return await sp.web.lists.getByTitle("Contacts").items.getById(parseInt(id)).delete().then(()=>{return true});
    }
    async updateContact(id: any, editedContact: any): Promise<boolean> {
        return  sp.web.lists.getByTitle("Contacts").items.getById(id).update({
            'name': editedContact.name,
            'mobile': editedContact.mobile,
            'email': editedContact.email,
            'landline': editedContact.landline,
             'address': editedContact.address,
            'website': editedContact.website,  
          }).then(()=>{
            return true
          })
    }
    async getContactById(id: string): Promise<any> {
      const item: any = await sp.web.lists.getByTitle("Contacts").items.getById(parseInt(id)).get();
           return item;
    }
    createItem = async (newPerson:IPerson) => {
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
    

    getAllItems = async () => {
        return await  sp.web.lists.getByTitle("Contacts").items.get();
      }
    

}

