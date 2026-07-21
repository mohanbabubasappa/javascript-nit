const fruits=new Map([
    ["apple",100],
    ["mango",200],
    ["banana",300]
])

console.log(fruits)
console.log(typeof fruits)
console.log(fruits instanceof Map)
console.log(fruits.size)

for(fruit of fruits){
    console.log("fruits: "+fruit)
}

fruits.forEach(function(v,k){
    console.log("key: "+k+"#"+"value:"+v)
})

const cars=new Map()
cars.set('volvo',10)
cars.set('benz',2)
cars.set('maruti',1)

console.log(cars)
console.log(cars.keys())
console.log(cars.values())
console.log(cars.entries())
console.log(cars.has('benz'))
cars.delete("volvo")
console.log(cars)
cars.clear()
console.log(cars)

