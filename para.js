var sub = function (a, b) {
    if (a === void 0) { a = 30; }
    if (b === void 0) { b = 5; }
    console.log(a - b);
};
var mul = function () {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    var i;
    var mu = 0;
    for (i = 0; i < num.length; i++) {
        mu = mu + num[i];
    }
    console.log(mu);
};
var detail = function (id, name, mail) {
    console.log("ID:", id);
    console.log("Name:", name);
    if (mail != undefined)
        console.log("Email id", mail);
};
detail(1, "xyz");
detail(2, "abc", "abc@mail.com");
sub();
mul(2, 3, 2, 1, 5);
