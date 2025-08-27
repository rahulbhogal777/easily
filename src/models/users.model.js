class User {
    constructor(id, name, email, password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    static addUser(name, email, password) {
        const id = users.length + 1;
        const user = new User(id, name, email, password);
        users.push(user);
    }

    static findUser(email, password) {
        return users.find((user) => user.email === email && user.password === password);
    }

}

let users = [];

export default User;