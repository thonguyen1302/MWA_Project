export class Employee {
    constructor(
        public _id = 0, 
        public firstname: string = '', 
        public lastname: string = '', 
        public role: string = '', 
        public email: string = '', 
        public phone: string = '', 
        public createdDate: Date = new Date()) { }
}
