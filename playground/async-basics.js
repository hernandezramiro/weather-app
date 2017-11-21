console.log("Starting app");

setTimeout(() => {
    console.log("Inside of callback");
}, 2000);

setTimeout(() => {
    console.log("This is my second setTimeout");
}, 0);

console.log("Finishing up");
