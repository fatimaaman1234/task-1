function constructDrinks(drinktype, drinkflavor, drinkcolor, drinkcompany, drinkprice, ) {
    let object = {
        "type": drinktype,
        "flavor": drinkflavor,
        "color": drinkcolor,
        "company": drinkcompany,
        "price": drinkprice,
        "data": function() {
            console.log(`This ${this.type} has ${this.flavor} falvor which i like the most. Its price is ${this.price}Rs`);
        }
    }
    return object;
}

function constructCar(cartype, carmodel, carcolor, carcompany, numPlate, carspeed, carShape, carprice, ) {
    let object = {
        "type": cartype,
        "model": carmodel,
        "color": carcolor,
        "company": carcompany,
        "numberPlate": numPlate,
        "speed": carspeed,
        "shape": carShape,
        "price": carprice,
        "data": function() {
            console.log(`This ${this.type} with model number ${this.model} has ${this.color} color which is made by ${this.company} company has a prize of ${this.price}.`);
        }
    }
    return object;
}

function constructMobile(mobiletype, mobilecolor, mobilecompany, mobileoperatingSystem, mobilenetwork, mobileprice, ) {
    let object = {
        "type": mobiletype,
        "color": mobilecolor,
        "company": mobilecompany,
        "operatingSystem": mobileoperatingSystem,
        "network": mobilenetwork,
        "price": mobileprice,
        "data": function() {
            console.log(`This ${this.type} has ${this.color} color which is made by ${this.company} company has a prize of ${this.price}.`);
        }
    }
    return object;
}