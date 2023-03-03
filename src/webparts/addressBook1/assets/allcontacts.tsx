import { IPerson } from "./icontact";
import { Guid } from "guid-typescript";
export let people:Array<IPerson> = [{id:Guid.create().toString(),name:"Chandermani Arora",email:"chandermani@technovert.com",mobile:"+91 9292929292",landline:"040301231211",website:"http://www.technovert.com",address:"123 now here\nSome street\nMadhapur, Hyderabad 500033"},
{id:Guid.create().toString(),name:"Sashi Pagadala",email:"sashi@technovert.com",mobile:"+91 9985528844",landline:"040301231211",website:"http://www.technovert.com",address:"123 now here\nSome street\nMadhapur, Hyderabad 500033"},
{id:Guid.create().toString(),name:"Praveen Battula",email:"praveen@technovert.com",mobile:"+91 9985016232",landline:"040301231211",website:"http://www.technovert.com",address:"123 now here\nSome street\nMadhapur, Hyderabad 500033"},
{id:Guid.create().toString(),name:"Vijay Yalamanchili",email:"vijay@technovert.com",mobile:"+91 9985016232",landline:"040301231211",website:"http://www.technovert.com",address:"123 now here\nSome street\nMadhapur, Hyderabad 500033"}];