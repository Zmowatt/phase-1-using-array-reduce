const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

const totalBatteries = batteryBatches.reduce(sumBatteries, 0);

function sumBatteries(accum, element){
   return accum + element
}