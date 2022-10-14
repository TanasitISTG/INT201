import Pokemon from "./poke_class.js";

let pikachu = new Pokemon("Pikachu", 100, 10)
let charmander = new Pokemon("Charmander", 100, 10)
// let charmander = new Pokemon("Charmander", 100, 20)

function battle(pokemon1, pokemon2) {
    console.log("Battle start!")
    console.log(pokemon1.getInfo())
    console.log(pokemon2.getInfo())
    
    let round = 1
    while (round <= 10) {
        let rand_start = Math.floor(Math.random() * 10) + 1

        console.log(`------ Round ${round} ------`)
        if (rand_start % 2 === 0) {
            pokemon2.setHp(pokemon2.getHp() - pokemon1.getAtk())
            console.log(`${pokemon1.getName()} attacks ${pokemon2.getName()}!`)
            console.log(`${pokemon2.getName()} has ${pokemon2.getHp()} hp left!`)

            if (pokemon2.getHp() <= 0) {
                break
            }
        }
        else {
            pokemon1.setHp(pokemon1.getHp() - pokemon2.getAtk())
            console.log(`${pokemon2.getName()} attacks ${pokemon1.getName()}!`)
            console.log(`${pokemon1.getName()} has ${pokemon1.getHp()} hp left!`)

            if (pokemon1.getHp() <= 0) {
                break
            }
        }
        round++
    }

    console.log('--------------')
    console.log(pokemon1.getInfo())
    console.log(pokemon2.getInfo())
    
    if (pokemon1.getHp() > pokemon2.getHp()) {
        console.log('--------------')
        console.log(`${pokemon1.getName()} wins!`)
    }
    else if (pokemon1.getHp() < pokemon2.getHp()) {
        console.log('--------------')
        console.log(`${pokemon2.getName()} wins!`)
    }
    else {
        console.log('--------------')
        console.log('Draw')
    }
}

battle(pikachu, charmander)