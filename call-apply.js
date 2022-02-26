const kibria = {
    id: 101,
    money: 5000,
    name: 'RJ Kibria',

    treatDey: function (expense, bossis, tax) {
        this.money = this.money - expense - bossis - tax;
        console.log(this);
        return this.money;
    }
};

const heroBalam = {
    id: 102,
    money: 6000,
    name: 'Hero Balam'
};
const normalGolam = {
    id: 103,
    money: 8000,
    name: 'Normal Golam'
};

// call
kibria.treatDey.call(heroBalam, 500, 200, 100);
kibria.treatDey.call(heroBalam, 500, 200, 100);
// apply
kibria.treatDey.apply(heroBalam, [500, 50, 30]);
kibria.treatDey.apply(heroBalam, [3000, 100, 50]);