class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = Number(spaceAvailable);
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {
        if (this.spaceAvailable < spaceRequired) {
            throw new Error("Not enough space in the garden.");
        }
        this.plants.push({
            plantName,
            spaceRequired,
            ripe: false,
            quantity: 0,
        })
        this.spaceAvailable -= spaceRequired;

        return `The ${plantName} has been successfully planted in the garden.`;
    }

    ripenPlant(plantName, quantity) {
        let plant = this.plants.find(p => p.plantName === plantName);
        if (plant === undefined) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }

        if (plant.ripe === true) {
            throw new Error(`The ${plantName} is already ripe."`);
        }

        if (quantity <= 0) {
            throw new Error(`The quantity cannot be zero or negative.`);
        }

        plant.ripe = true;
        plant.quantity += quantity;
        if (quantity === 1) {
            return `${quantity} ${plantName} has successfully ripened.`;
        } else {
            return `${quantity} ${plantName}s have successfully ripened.`;
        }
    }

    harvestPlant(plantName) {
        let plant = this.plants.find(p => p.plantName === plantName);
        if (plant === undefined) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }

        if (plant.ripe === false) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`)
        }

        let quantity = plant.quantity;
        this.storage.push({ plantName, quantity })
        this.spaceAvailable += plant.spaceRequired;

        let index = this.plants.indexOf(plant);
        this.plants.splice(index, 1)

        return `The ${plantName} has been successfully harvested.`;
    }

    generateReport() {
        let result = `The garden has ${this.spaceAvailable} free space left.\n`;
        let plantsInGarden = this.plants.sort((a, b) => a.plantName.localeCompare(b.plantName))
        result += `Plants in the garden: `;
        let plantsArr = [];
        plantsInGarden.forEach(element => plantsArr.push(element.plantName));
        result += plantsArr.join(", ");
        result += `\n`;

        if(this.storage.length === 0) {
            result += `"Plants in storage: The storage is empty.`;
        } else {
            result += `Plants in storage: `;
            let myStorage = [];
            for(let element of this.storage) {
                let data = `${element.plantName} (${element.quantity})`;
                myStorage.push(data);
                }
            result += myStorage.join(", ");
        }
        return result
    }
}

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());