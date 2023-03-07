import { sp } from "@pnp/sp"
async function updateContact(id: any, editedContact: any): Promise<boolean> {
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
export default updateContact;