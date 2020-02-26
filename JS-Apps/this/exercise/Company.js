class Company {

    constructor() {
        this._departments = [];
    }

    addEmployee(username, salary, position, department) {

        if (this._invalidParam(username) ||
            this._invalidParam(salary) ||
            this._invalidParam(position) ||
            this._invalidParam(department)) {
            throw new Error('Invalid input!');
        }

        if (salary < 0) {
            throw new Error(' Invalid input!');
        }

        let employee = { username, position, salary };

        let existingDepartment = this._departments.find(x => x.name === department);

        if (existingDepartment === undefined) {
            existingDepartment = { name: department, employees: [employee] }
            this._departments.push(existingDepartment);
        } else {
            existingDepartment.employees.push(employee);
        }

        return `New employee is hired. Name: ${username}. Position: ${position}`
    }

    _invalidParam(param) {
        return param === '' || param === undefined || param === null;
    }

    bestDepartment() {

        const byAvgSalaryDesc = (a, b) => {
            a = a.employees.reduce((acc, x) => acc += x.salary, 0) / a.employees.length;
            b = b.employees.reduce((acc, x) => acc += x.salary, 0) / b.employees.length;
            return b - a;
        }

        const bySalaryDescAndNameAsc = (a, b) => {
            return b.salary - a.salary || a.username.localeCompare(b.username);
        };

        let bestDepartment = this._departments.sort(byAvgSalaryDesc)[0];
        let bestDepartmentAvgSalary = bestDepartment.employees.reduce((acc, x) => acc += x.salary, 0) / bestDepartment.employees.length;

        let result = [`Best Department is: ${bestDepartment.name}`];
        result.push(`Average salary: ${bestDepartmentAvgSalary.toFixed(2)}`);

        bestDepartment.employees.sort(bySalaryDescAndNameAsc)
            .forEach(x => result.push(`${x.username} ${x.salary} ${x.position}`));

        return result.join('\n');
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());