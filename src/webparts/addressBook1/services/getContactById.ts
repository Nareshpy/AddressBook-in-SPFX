import { sp } from "@pnp/sp";

async function getContactById(id: string): Promise<any> {
    const item: any = await sp.web.lists.getByTitle("Contacts").items.getById(parseInt(id)).get();
         return item;
  }
export default getContactById;