var getUser = (id, callback) => {
    var user = {
        id: id,
        name: "Jessica"
    };

    setTimeout(() => {
        callback(user);
    }, 3000);

    //callback(user);
};

//Opcion 1
getUser(31, (userObject) => {
    console.log(userObject);
});

//Opcion 2
/*getUser(31, function (userObject) {
    console.log(userObject);
});*/


//Por qué no funciona??
/*function logUser(userObject) {
    console.log(userObject);
};

getUser(31, logUser(userObj));
*/