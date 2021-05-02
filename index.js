import {Person} from './Person.js';
import {Student} from './Student.js';
import {Employee} from './Employee.js';
import {Manager} from './Manager.js';


    let person = new Person('Михаил',"Бобровский");

    let student = new Student('Сергей',"Серг","07.04.1998",3);
    
    let employee1 = new Employee('Владимир',"Гус1","1111 рублей");

    let employee2 = new Employee('Владимир',"Гус2","2222 рублей");

    let employee3 = new Employee('Владимир',"Гус3","3333 рублей");

    let employee4 = new Employee('Владимир',"Гус4","4444 рублей");

    let manager = new Manager('Андрей',"Ким","5555 рублей",[employee1,employee2,employee3]);
    manager.removeEmployee(employee1)
    manager.addEmployee(employee4)
    manager.payAllEmployee("02.05.2021")
    manager.payOneEmployee("02.05.2021", employee1);
    manager.addEmployee(employee1);
    manager.payOneEmployee("03.05.2021", employee1);
    
    let allPeople = [person,student,employee1,employee2,employee3,manager];
    allPeople.forEach((person =>{
     person.info
     console.log("_______")
    }));
        
    
    person.сounter()
    




