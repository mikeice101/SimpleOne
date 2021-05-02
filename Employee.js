import {Person} from './Person.js';
export class Employee extends Person {
    constructor(firtsName,lastName,salary) {
        super(firtsName,lastName);
        this._salary=salary;
        this._paidSalaries=[];
        this._manager = null;
    }
    set addManager(manager) {
        this._manager = manager;
    }
    
    get salary() {
        return this._salary;
    }
    get info() {
        super.info;
        console.log(`Менеджер: ${this._manager}`);
        console.log(`Зарплата: ${this.salary}`);
        console.log("Квиток:"+this._paidSalaries.join(' , '));
    }
}