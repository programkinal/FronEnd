export class Assignment {
    constructor(
        public workingDay: string,
        public career: string,
        public section: string,
        public course: Array<any>,
        public instructor?: string
    ){}
}
