const a=[12,35,7,79,24,70,24,483,57,190]
console.log(a.length)

const fruits=["banana","apple","orange"]
console.log(fruits)
console.log(fruits.toString()) //convert string
console.log(fruits.join('+'))
fruits.pop() //remove last
console.log(fruits)
fruits.push("papaya") //add at end
console.log(fruits)
fruits.shift() //remove at first
console.log(fruits)
fruits.unshift("lemon") //add at first
console.log(fruits)
fruits[1]="ginger"
console.log(fruits)
console.log(Array.isArray(fruits))

const b=[1,2,3]
const c=[4,5,6]
console.log(b.concat(c))

const s=[[1,2,3],[4,5],[7,8,9],[11,12]]
console.log(s)
console.log(s.flat())

const cars=["bmw","maruthi","benz","rollsroyce"]
cars.splice(1,2,"car1") //removes
console.log(cars)

const bikes=["hero","honda","pulsar","fz"]
const bikes1=bikes.slice(1)
console.log(bikes1)
const bikes2=bikes.slice(2,4)
console.log(bikes2)
console.log(bikes.sort())
console.log(bikes.reverse())
