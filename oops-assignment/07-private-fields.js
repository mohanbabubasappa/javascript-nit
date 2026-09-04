class User {
    #password
    constructor(username, password) { this.username = username; this.#password = password }
    verifyPassword(password) { return this.#password === password }
    changePassword(oldPassword, newPassword) { if (this.verifyPassword(oldPassword)) this.#password = newPassword }
}
const user = new User("mohan", "old123")
console.log(user.verifyPassword("old123")); user.changePassword("old123", "new123"); console.log(user.verifyPassword("new123"))
