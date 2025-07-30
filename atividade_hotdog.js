let salsicha = 3.50, pure = 2.15, salada = 1.9
const pao = .9, batata= .5
let dog_simples, dog_duplo, dog_especial
let fixos = pao + batata

dog_simples = salsicha + pure + fixos
dog_duplo = (salsicha*2) + pure + salada + fixos
dog_especial = (salsicha*3) + (pure*2) + salada + fixos

console.log("       Cardapio\n" + 
    "Hotdog Simples: R$" + dog_simples.toFixed(2) + 
    "\nSalsicha e purê de batata" + 
    "\n\nHotdog duplo: R$" + dog_duplo.toFixed(2) +
    "\nDuas salsichas, purê de batata e salada" + 
    "\n\nHotdog especial: R$" + dog_especial.toFixed(2) + 
    "\nTrês salsichas, purê em dobro e salada"
)