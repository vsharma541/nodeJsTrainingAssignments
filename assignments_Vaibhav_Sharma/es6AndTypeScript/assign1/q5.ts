// question a
const add = (a=1, b=1, c=1) => {
    return a+b+c;
}
console.log(add(3,2));

// question b
const userFriends = (username, ...friends) => {
    console.log(username);
    for(let friend of friends) {
        console.log(friend);
    }
}
userFriends("Tom", "Mary", "Mark", "Steve", "Lorde");

// question c
const names = ["Tom", "Mary", "Mark", "Steve", "Lorde"];
function printCapitalNames(...users) {
    console.log(users.map(user => user.toUpperCase()));
}
printCapitalNames(...names);
