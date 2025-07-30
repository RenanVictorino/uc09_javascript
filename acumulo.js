// Acumulalr valores em uma variável

let personagem = "ÉoTaxas"
let moedas = 0
let checkpoint 

console.log("Bem-vindo ao jogo")
console.log(personagem + ": " + moedas + " Moedas")

moedas++
moedas++
//moedas =+ 1
//moedas = moedas + 1
console.log(personagem + ": " + moedas + " Moedas")

moedas ++
moedas ++
moedas += 5
moedas -= 2
moedas += 3

console.log(personagem + ": " + moedas + " Moedas")

moedas += 10
moedas -= moedas/2
moedas ++ 
checkpoint = moedas
// checkpoint
moedas = moedas*2

console.log(personagem + ": " + moedas + " Moedas")
moedas = 0
console.log(personagem + ": " + moedas + " Moedas, " + personagem + " is dead!")

moedas = checkpoint
console.log(personagem + ": " + moedas + " Moedas")



