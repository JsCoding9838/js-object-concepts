const kibria = {
    id: 101,
    money: 5000,
    name: 'RJ Kibria',

    treatDey: function (expense) {
        this.money = this.money - expense;
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

kibria.treatDey(100);
const heroTreatDey  = kibria.treatDey.bind(heroBalam);
heroTreatDey(500);
heroTreatDey(300);
heroTreatDey(200);
const normalTreatDey = kibria.treatDey.bind(normalGolam);
kibria.treatDey(100);
normalTreatDey(1000);
normalTreatDey(1000);