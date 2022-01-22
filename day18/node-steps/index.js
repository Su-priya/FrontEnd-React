let firstname = "Tony";
let lastname = "stark";

function fullname(){
    console.log("full name was called");
}

/* 
module.exports.fname = firstname;
module.exports.lname = lastname;
module.exports.fullname = fullname; 
*/

module.exports = {
    fname : firstname,
    lname : lastname,
    fullname : fullname
} 