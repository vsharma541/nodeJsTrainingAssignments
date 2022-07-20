var users = ["ram", "mark", 'tom'];
var messages1 = [
    { "ram": "hi" },
    { "ram": "hello" },
    { "mark": "op" },
    { "mark": "hipo" },
    { "tom": "iop" }
];
var chatRoom1 = new Map();
var chatRoom2 = new Map();
var userChats = [], userChats2 = [], userChats3 = [];
for (var _i = 0, messages1_1 = messages1; _i < messages1_1.length; _i++) {
    var chat = messages1_1[_i];
    var name_1 = Object.keys(chat)[0];
    var msg = chat[name_1];
    if (chatRoom1.has(name_1)) {
        var userChats_1 = chatRoom1.get(name_1);
        userChats_1.push(msg);
        chatRoom1.set(name_1, userChats_1);
    }
    else {
        chatRoom1.set(name_1, [msg]);
    }
}
console.log(chatRoom1);
console.log(getUsers());
console.log(getMessages());
function getUsers() {
    return Array.from(chatRoom1.keys());
}
function getMessages() {
    var users = getUsers();
    var allMsgs = [];
    for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
        var user_1 = users_1[_i];
        allMsgs.push.apply(allMsgs, chatRoom1.get(user_1));
    }
    return allMsgs;
}
//# sourceMappingURL=q4.js.map