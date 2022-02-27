const pen = {
    brand: 'econo',
    price: 10,
    writeProm: function (food){
        console.log(food);
    }
}
// get all keys
const keys = Object.keys(pen);
const vlaues = Object.values(pen);

for(const key in pen){
    console.log(pen[key]);
}

const a = {a: 1};
const b = {a: 1};
const c = a;
if(a === b){

}
// optional
const aBounded = pen.writeProm.bind(a);
aBounded();
// this