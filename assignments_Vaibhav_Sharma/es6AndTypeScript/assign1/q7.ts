// question a
const [user1, user2, user3, user4] = ["Tom", "Mary", "Mark", "Steve"];
console.log(user3);

// question b
const obj = {
    person: "Rock",
    address: {
        place: "Denver",
        pincode: 333404
    }
}

const {person, address} = obj;
const {place, pincode} = address;
console.log(pincode);
