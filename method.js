const student = {
    id: 101,
    money: 5000,
    name: 'RJ Kibria',
    major: 'mathematics',
    isRich: false,
    subject: ['english', 'economics', 'calculus'],
    bestFriend: {
        name: 'kundu',
        major: 'mathemathics',
    },
    takeExam: function (){
        console.log(this.name, 'taking exam');
    },
    treatDey: function (expense, boksis) {
        this.money = this.money - expense - boksis;
        return this.money;
    }
}

student.takeExam();
const remaining1 = student.treatDey(100, 50);
const remaining2 = student.treatDey(500, 100);
console.log(remaining2);