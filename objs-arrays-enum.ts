
// const person: {
//     name:string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]
// } = {
//     name: 'Facundo',
//     age: 23,
//     hobbies: ['sports', 'coocking'],
//     role: [2, 'author']
// }


enum Role { ADMIN = 5, READ_ONLY, AUTHOR } //if you set a number the rest of the object takes the next index

const person = {
    name: 'Facundo',
    age: 23,
    hobbies: ['sports', 'coocking'],
    role: Role.ADMIN
}


// person.role.push('admin');
// person.role[1] = 10;
// person.role = [0, 'admin']
// console.log(person.role)

let favoriteActivities: string[];
favoriteActivities= ['sports']

console.log(person.name)

for(const hobby of person.hobbies){
    console.log(hobby)
    // console.log(hobby.map()) !! ERROR !!!    becose map() is only available in arrays and hobby is a string
}

if(person.role === 5){
    console.log('this is the admin');
}