function repainting(input) {
let nylon = Number(input[0]);
let paint = Number(input[1]);
let thinner = Number(input[2]);
let hours = Number(input[3]);

let nylonSum = (nylon + 2) * 1.5;
let paintSum = (paint + (paint * (10/100))) * 14.5;
let thinnerSum = thinner * 5;
let sumWithoutWorkers = nylonSum + paintSum + thinnerSum + 0.4;
let workers = (sumWithoutWorkers * (30/100)) * hours;
let totalSum = workers + sumWithoutWorkers;
console.log(totalSum);
}
repainting(["10","11","4","8"]);