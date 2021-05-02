export class Person {
    static #peopleCounter = 0; 
    constructor(firtsName,lastName) {
        this.firtsName=firtsName;
        this.lastName=lastName;
        Person.#peopleCounter++;
        
    }
    get info() {
        console.log(`Имя: ${this.firtsName}`);
        console.log(`Фамилия: ${this.lastName}`);
    }
    сounter(){
        console.log( `Количество людей: ${Person.#peopleCounter}`)
    }
}