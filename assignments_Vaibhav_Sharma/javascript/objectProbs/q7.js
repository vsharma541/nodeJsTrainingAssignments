var str = `
    {
        "firstName": '',
        "lastName": ""
    }
`;
var obj = JSON.parse(str);
console.log(obj);
obj.firstName = "james";
obj.lastName = "andersaon";
console.log(obj);
obj.middleName = "charles";
console.log(obj);