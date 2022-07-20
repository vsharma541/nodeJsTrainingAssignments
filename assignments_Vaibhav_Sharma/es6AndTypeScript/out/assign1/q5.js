// question a
var add = function (a, b, c) {
    if (a === void 0) { a = 1; }
    if (b === void 0) { b = 1; }
    if (c === void 0) { c = 1; }
    return a + b + c;
};
console.log(add(3, 2));
// question b
var userFriends = function (username) {
    var friends = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        friends[_i - 1] = arguments[_i];
    }
    console.log(username);
    for (var _a = 0, friends_1 = friends; _a < friends_1.length; _a++) {
        var friend = friends_1[_a];
        console.log(friend);
    }
};
userFriends("Tom", "Mary", "Mark", "Steve", "Lorde");
// question c
var names = ["Tom", "Mary", "Mark", "Steve", "Lorde"];
function printCapitalNames() {
    var users = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        users[_i] = arguments[_i];
    }
    console.log(users.map(function (user) { return user.toUpperCase(); }));
}
printCapitalNames.apply(void 0, names);
//# sourceMappingURL=q5.js.map