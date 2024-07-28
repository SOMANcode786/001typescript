"use strict";
//PROMISE
Object.defineProperty(exports, "__esModule", { value: true });
function washing() {
    console.log('Washing started...');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('washing done!');
        }, 5000);
    });
}
function soaking() {
    console.log('Soaking started...');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Soaking done!');
        }, 3000);
    });
}
function drying() {
    console.log('Drying started...');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Drying not done!');
        }, 2000);
    });
}
async function runWashingMashine() {
    try {
        const result1 = await washing();
        console.log(result1);
        const result2 = await soaking();
        console.log(result2);
        const result3 = await drying();
        console.log(result3);
    }
    catch (error) {
        console.log(error);
    }
    finally {
        console.log(" i will run away");
    }
}
runWashingMashine();
