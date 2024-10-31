


export class Person {
    // public name: string;
    // private addres: string;

    constructor( 
        public firstName: string, 
        public lastName: string, 
        public addres: string = 'No Addres'
    ) {}
}

/* 
export class Hero extends Person {

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string
    ) {
        super( realName, 'New York' )
    }
}
*/


export class Hero {


    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person,
    ) {

        // this.person = new Person(realName)

    }
}

const tony = new Person('Tony', 'Stark', 'New York')


const ironman = new Hero('Iron Man',45,'Tony', tony);

console.log(ironman)