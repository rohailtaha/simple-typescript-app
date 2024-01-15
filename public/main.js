"use strict";
var _a;
function showSum(num1, num2) {
    console.log("".concat(num1, " + ").concat(num2, " = ").concat(num1 + num2));
    alert("".concat(num1, " + ").concat(num2, " = ").concat(num1 + num2));
}
(_a = document
    .querySelector('button')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () { return showSum(4, 5); });
