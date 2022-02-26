const bottle = {
    color: 'yellow',
    hold: 'water',
    price: 50,
    isCleaned: true
};

/* 
for(let i = 0; i < 10; i++){};
for(const num of numbers){}; // array
for(const prop in student){} // object
*/

// for useing object property (in)
for(const prop in bottle){
    // only value
    // console.log(prop);
    // console.log(bottle[prop]);
};

const keys = Object.keys(bottle);
// console.log(keys);
for(const prop of keys){
    // console.log(prop, bottle[prop]);
    // const keysWithValue = Object.entries(bottle);
    // console.log(keysWithValue);
};

// advanced
const entries  = Object.entries(bottle);
console.log(entries);
for(const [key, value] of Object.entries(bottle)){
    // console.log(key, value);
};

// []

