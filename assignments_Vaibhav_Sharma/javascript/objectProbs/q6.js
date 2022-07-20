var str = `
    {
        firstName: "",
        lastName: ""
    }
`;
var obj = eval("(" + str + ")");
console.log(obj);
obj.firstName = "james";
obj.lastName = "andersaon";
console.log(obj);
obj.middleName = "charles";
console.log(obj);