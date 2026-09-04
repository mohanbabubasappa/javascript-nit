const words = "js is fun and js is useful".split(" ")
const counts = new Map()
for (const word of words) counts.set(word, (counts.get(word) || 0) + 1)
console.log(Object.fromEntries(counts))
