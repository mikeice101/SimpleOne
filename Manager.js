import {Person} from './Person.js';
function getDate(date) {
    let year = +date.split('.')[2];
    let month = +date.split('.')[1]-1;
    let day = +date.split('.')[0];
    let FullDate = new Date(year,month,day);
    let monthOfYear = ['Январь','Февраль', 'Март', 'Апрель' ,'Май' ,'Июнь', 'Июль', 'Август', 'Сертябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    return `${FullDate.getDate()} ${monthOfYear[FullDate.getMonth()]} ${FullDate.getFullYear()}`;
    
}
export class Manager extends Person {
    constructor(firtsName,lastName,salary,listOfSubordinates) {
        super(firtsName,lastName);
        this._salary=salary;
        this._paidSalaries=[];
        this._listOfSubordinates= listOfSubordinates.map(function(employee) {            
            employee.addManager = `${firtsName} ${lastName}`;
            return employee;
        });
        
    };
    
    get info() {
        super.info;
        console.log(`Зарплата: ${this._salary}`);
        console.log("Выплатил:"+this._paidSalaries.join(' , '));
        console.log("Подчиненные:"+this._listOfSubordinates.map((employee)=>`${employee.firtsName} ${employee.lastName}`));
    }
    addEmployee(employee) {
        this._listOfSubordinates.push(employee);
        console.log(`Сотрудник: ${employee.firtsName} ${employee.lastName} добавлен`);
    }
    removeEmployee(employee) {
        let indexEmployee =  this._listOfSubordinates.indexOf(employee);
        if (indexEmployee > -1) {
            this._listOfSubordinates[indexEmployee].addManager=null;
            this._listOfSubordinates.splice(indexEmployee, 1);
            console.log('Сотрудник удален');
        }
        else {
            console.log('Сотрудник не найден');
        }
    }
    payAllEmployee(date) {
        let datePay = getDate(date);
        this._listOfSubordinates.map((employee)=>{
            
            employee._paidSalaries.push([`${datePay} ${employee.salary}`]);
            this._paidSalaries.push([`${datePay} ${employee.salary} ${employee.firtsName} ${employee.lastName}`]);
        });
        
    }
    payOneEmployee(date,employee) {
        let datePay = getDate(date);
        let indexEmployee = this._listOfSubordinates.indexOf(employee)
        if(indexEmployee==-1) {
            console.log('Такого сотрудника нет у данного менеджера выплата не возможна')
        }
        else {
            employee._paidSalaries.push([`${datePay} ${employee.salary}`]);
            this._paidSalaries.push([getDate(date),employee.salary,employee.salary]);
            console.log(`Сотруднику ${employee.firtsName} выплачено ${employee.salary}` )
        }
        
        
    }
    
}


