alert("Vamos brincar de evoluir o seu pokemón!")
var pokemonEscolhido = prompt("Vamos começar! Digite qual Pokemón você quer evoluir: Pikachu, Bulbassauro ou Squirtle?")

if (pokemonEscolhido == "Pikachu") {
    document.write("<h2> PARABÉNS! VOCÊ ACABA DE EVOLUIR SEU PIKACHU PARA UM SUPER PIKACHU! </h2> ")
} else if (pokemonEscolhido == "Bulbassauro") {
    document.write("<h2> PARABÉNS! VOCÊ ACABA DE EVOLUIR SEU BULBASSAURO PARA UM SUPER BULBASSAURO!</h2> ")
} else if (pokemonEscolhido == "Squirtle") {
    document.write("<h2> PARABÉNS! VOCÊ ACABA DE EVOLUIR SEU    SQUIRTLE PARA UM SUPER SQUIRTLE! </h2> ")
} else {
   document.write("<h2> ESSE POKEMÓN NÃO EXISTE NO MEU DICIONÁRIO!</h2> ")
}


 
