export class Employee {
    constructor(
        public _id = 0, public firstname: string = '', public lastname: string = '', public role: string = '', public email: string = '', public phone: string = '', public password: string='', public createdDate: Date = new Date()) { }
}

// export class Department {
//     constructor(public _id = 0, public name: string = '', public description: string = '', public status: number = 1, public createdDate: Date = new Date()) { }
// }
