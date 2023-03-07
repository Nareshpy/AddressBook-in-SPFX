import { sp } from "@pnp/sp";

async function deleteDetails(id: string): Promise<boolean> {
    return await sp.web.lists.getByTitle("Contacts").items.getById(parseInt(id)).delete().then(()=>{return true});
 }
export default deleteDetails; 