import {Person} from './Person.js';
export class Student extends Person{
    constructor(firtsName,lastName,dateOfBirth,yearStudent) {
        super(firtsName,lastName);
        this.dateOfBirth=dateOfBirth;
        this.yearStudent=yearStudent;
    }
    get info() {
        super.info;
        console.log(`Дата рождения: ${this.dateOfBirth}`);
        console.log(`Курс: ${this.yearStudent}`);
    }
}
