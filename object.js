const person={
    fname:"mohan",
    lname:"babu",
    age:33,
    city:"tirupati",
    fullName:function(){
        return this.fname+this.lname
    }
}
console.log(typeof person)
console.log(person)
console.log(person.age)
console.log(person.fullName())


const car=new Object({
    name:"bmw",
    cost:1300000,
    color:"red"
})
console.log(car)
console.log(car.name)

const partys={}
partys.first="jsp"
partys.second="bjp"
partys.third="tdp"
partys.fourth="ycp"
console.log(partys)
console.log(partys.first)
console.log(partys["first"])
for(let party in partys){
    console.log(partys[party])
}

console.log(Object.values(partys))

for(let [k,v] of Object.entries(partys)){
    console.log(k+"#"+v)
}

function persona(fname,lname,age,city){
    this.fname=fname
    this.lname=lname
    this.age=age
    this.city=city
}

const bowler=new persona("jasprit","bhumra",35,"MP")
const batsman=new persona("sachin","tendulkar",55,"MH")
const allrounder=new persona("shivam","dhube",35,"AP")
console.log(bowler)
console.log(batsman)
console.log(allrounder)
delete allrounder.city
console.log(allrounder)
