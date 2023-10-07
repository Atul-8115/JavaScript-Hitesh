const accountId = 144553
let accountEmail = "atulkumar@gmail.com";
var accountPassword = "12345";
accountCity = "Balrampur";

accountEmail = "abc@c.com";
accountPassword = "21212121";
/*
   Prefer not use var keyword
   because of issue in block scope and functional scope
 */
console.table([accountId,accountEmail,accountPassword,accountCity]);