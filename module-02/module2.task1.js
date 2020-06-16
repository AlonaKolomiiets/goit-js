const logItems = function (array) { 
    for (let i = 0; i < array.length; i++) {
        const visualIndex = i + 1;
        const value = array[i];
        console.log(`${visualIndex}: ${value}`);
    }
};

const first = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];
logItems(first);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

