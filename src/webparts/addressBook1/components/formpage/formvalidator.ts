export class ValidateForm{
ValidateName(tempName:string){
    if (tempName == "") {
        return true;
      } else {
       return false;
      }
}
ValidateEmail(tempEmail:string){
    if (tempEmail == "") {
        return true;
      } else {
        const emailCheck:RegExp= /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
        if (tempEmail.match(emailCheck)) {
            return false;
        } else {
            return true;
        }
}}
ValidateMobile(tempMobile:string){
    if (tempMobile === "" || tempMobile.length != 10) {
        return true
      } 
    else {
        return false
      }
}
}