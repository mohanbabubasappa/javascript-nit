class Book {
    constructor(title, author) { this.title = title; this.author = author; this.available = true }
}
class Member {
    constructor(name) { this.name = name; this.books = [] }
    borrow(book) { if (book.available) { book.available = false; this.books.push(book) } }
    returnBook(book) { book.available = true; this.books = this.books.filter(item => item !== book) }
}
class Library {
    constructor() { this.books = []; this.members = [] }
    addBook(book) { this.books.push(book) }
    register(member) { this.members.push(member) }
    search(title) { return this.books.find(book => book.title === title) }
    available() { return this.books.filter(book => book.available).map(book => book.title) }
}
const library = new Library(); const book = new Book("1984", "George Orwell"); const member = new Member("Mohan")
library.addBook(book); library.register(member); member.borrow(library.search("1984")); console.log(library.available()); member.returnBook(book); console.log(library.available())
