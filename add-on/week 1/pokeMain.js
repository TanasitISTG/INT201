const poke = require("./pokeList.js").pokeList;

function fire_type(arr) {
    let fire = [];
    for (let obj of arr) {
        if (obj !== null && obj.type === "fire") {
            fire.push(obj);
        }
    }
    return fire.sort((a, b) => a.id - b.id);
}

function most_atk(arr) {
    let most = [];
    let maxFire = 0;
    let maxGrass = 0;
    let maxElectric = 0;
    for (let obj of arr) {
        if (obj !== null && obj.type === "fire") {
            if (obj.atk > maxFire) {
                maxFire = obj.atk;
                most[0] = obj;
            } else if (obj.atk === maxFire) {
                most.push(obj);
            } 
        } else if (obj !== null && obj.type === "grass") {
            if (obj.atk > maxGrass) {
                maxGrass = obj.atk;
                most[1] = obj;
            } else if (obj.atk === maxGrass) {
                most.push(obj);
            }
        } else if (obj !== null && obj.type === "electric") {
            if (obj.atk > maxElectric) {
                maxElectric = obj.atk;
                most[2] = obj;
            } else if (obj.atk === maxElectric) {
                most.push(obj);
            }
        }
    }
    //sort most by atk
    return most.sort((a, b) => b.atk - a.atk);
}

console.log(most_atk(poke));
