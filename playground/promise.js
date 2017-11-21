
var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof a === "number" && typeof b === "number") {
                resolve(a + b);
            }
            else {
                reject("Arguments must be numbers");
            }
        }, 1500);
    });
};

asyncAdd(5, 1)
.then((result) => {
    console.log("This is the first result: ", result);
    return asyncAdd(result, 10);
})
.then((result) => {
    console.log("This is the second result: ", result);
})
.catch((errorMessage) => {
    console.log(errorMessage);
});

///////////// FIRST EXAMPLE
/*
var somePromise = new Promise((resolve, reject) => {
    var booleano = false;
    setTimeout(() => {
        if(booleano) {
            resolve("Hey, It worked!");
        } else {
            reject("Unable to fulfill promise");
        }
    }, 2500);
});

somePromise.then((message) => {
    console.log("Success: ", message);
}, (errorMessage) => {
    console.log("Error: ", errorMessage);
});
*/
