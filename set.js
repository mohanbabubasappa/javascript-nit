const players=new Set(["Sachin","Shewag","Dhoni","Virat","Rohit"]);
console.log(players)
players.add("Vaibhav");
console.log(players)
console.log(players.size)
console.log(players.has("Sachin"))
console.log(typeof players)
console.log(players instanceof Set)

for(player of players){
    console.log(player)
}

players.forEach(function(value){
    console.log("player: "+value)
})

const A=new Set(['A','B','C']);
const B=new Set(['B','C','D']);
console.log(A.union(B));
console.log(A.intersection(B));
console.log(A.difference(B));
console.log(B.difference(A));
console.log(B.symmetricDifference(A));
console.log(A.isSubsetOf(B));
console.log(B.isSubsetOf(A));
console.log(A.isSupersetOf(B));
console.log(B.isSupersetOf(A));




