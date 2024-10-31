export interface Passenger {
    name: string;
    childern?: string[];
}

const passenger1: Passenger = {
    name: 'Alex'
}

const passenger2: Passenger = {
    name: 'Juan',
    childern: ['Luis', 'Alberto']
}

const returnChildrenNumber = ( passenger: Passenger ): number => {
    const howManyChildren = passenger.childern?.length || 0;
    // const howManyChildren = passenger.childern!.length;

    console.log( passenger.name, howManyChildren );

    return howManyChildren;
}

returnChildrenNumber( passenger1 );

console.log(passenger2);