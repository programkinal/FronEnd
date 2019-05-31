export class Person {
    constructor(
        public firstName: string,
        public middleName: string,
        public firstLastName: string,
        public secondLastName: string,
        public marriedName: string,
        public birthname: Date,
        public religion: string,
        public email:Array<any>,
        public gender: string,
        public civilStatus: string,
        public address: Array<any>,

        /**----------------------- */
        public phones: Array<any>,
        // public cellphone: string,
        // public house: string,
        // public otherNumber: Array<any>
    ) {}
}