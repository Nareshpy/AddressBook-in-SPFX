import { sp } from "@pnp/sp";
const getAllItems = async () => {
    return await  sp.web.lists.getByTitle("Contacts").items.get();
  }
export default getAllItems;
