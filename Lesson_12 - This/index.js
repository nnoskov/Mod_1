// this - object

//console.log(this);


const user = {
    name: 'Nikolay',
    dateOfBirth: 1985,
    getName() {
        return this.name;
    },

    calculateAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.dateOfBirth;
    },
    getAllInfo: function () {
        const age = this.calculateAge();
        console.log(`Имя ${this.name}, Возраст: ${age}`);
        return Object.entries(this);
    }
}

console.log(user.getName());
console.log(user.calculateAge());
console.log(user.getAllInfo());

// bind. call. apply

const user2 = {
    name: 'Igor',
}

//const user2name = user.getName.call(user2);
const user2name = user.getName.call(user2);

console.log("user2name", user2name);