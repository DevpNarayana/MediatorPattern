class User {
    constructor(name) {
        this.name = name;
        this.chatRoom = null;
    }
    send(message, to) {
        this.chatRoom.send(message, this, to);
    }
    recieve(message, from) {
        console.log(`${from.name} to ${this.name}:  ${message}`);
    }
}

class ChatRoom {
    constructor() {
        this.users = {};
    }
    register(user) {
        this.users[user.name] = user;
        user.chatRoom = this;
        console.log(`${user.name} is registered!`)
    }
    send(message, from, to) {
        if (to) {
            // for single user
            to.recieve(message, from);

        } else {
            // for multiple users
            for (let key in this.users) {
                if (this.users[key] !== from) {
                    this.users[key].recieve(message, from)
                }
            }
        }
    }
}

const chatRoom = new ChatRoom();

const narayana = new User('Narayana');
const pranay = new User('Pranay');
const santhosh = new User('Santhosh');
chatRoom.register(narayana);
chatRoom.register(pranay);
chatRoom.register(santhosh);
narayana.send('Hi', pranay);
pranay.send('Hi hello', narayana);
narayana.send('Hi heros'); // to everyone