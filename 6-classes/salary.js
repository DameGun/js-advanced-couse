class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    get salary() {
        return `${this._salary} BYN`;
    }
    
    set salary(value) {
        if (value <= 0) {
            throw new Error('Employee salary should be greater than null');
        }
        this._salary = value;
    }

    annualSalary() {
        return `${this._salary * 12} BYN`;
    }
}

const Departments = {
    JavaScript: "JavaScript",
    Java: 'Java',
    C: 'C',
}

Object.freeze(Departments);


class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary);

        this.department = department;
    }

    get department() {
        return this._department;
    }

    set department(value) {
        if (!Object.hasOwn(Departments, value)) {
            throw new Error('Invalid department for manager');
        }
        this._department = value;
    }
    
    annualSalary() {
        let bonuses;
        
        switch (this._department) {
            case Departments.JavaScript: {
                bonuses = 15000;
                break;
            };
            case Departments.Java: {
                bonuses = 10000;
                break;
            };
            case Departments.C: {
                bonuses = 20000;
                break;
            }
            default: {
                bonuses = 0;
                break;
            }
        }

        return `${this._salary * 12 + bonuses} BYN`;
    }
}


const jsManager = new Manager('Alex', 20000, Departments.JavaScript);
const javaManager = new Manager('John', 10000, Departments.Java);

console.log(jsManager.annualSalary());
console.log(javaManager.annualSalary());