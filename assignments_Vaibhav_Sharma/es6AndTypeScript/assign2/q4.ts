let users = ["ram", "mark", 'tom'];
let messages1 = [
    {"ram": "hi"},
    {"ram": "hello"},
    {"mark": "op"},
    {"mark": "hipo"},
    {"tom": "iop"}
]
let chatRoom1 = new Map();
let chatRoom2 = new Map();
let userChats = [], userChats2 = [], userChats3 = [];
for(let chat of messages1) {
    let name = Object.keys(chat)[0];
    let msg = chat[name];
    if(chatRoom1.has(name)) {
        let userChats = chatRoom1.get(name);
        userChats.push(msg);
        chatRoom1.set(name, userChats);
    }else {
        chatRoom1.set(name, [msg])
    }
}
console.log(chatRoom1);
console.log(getUsers());
console.log(getMessages());

function getUsers() {
    return Array.from(chatRoom1.keys());
}
function getMessages() {
    let users = getUsers();
    let allMsgs = [];
    for(let user of users) {
        allMsgs.push(...chatRoom1.get(user));
    }
    return allMsgs;
}
