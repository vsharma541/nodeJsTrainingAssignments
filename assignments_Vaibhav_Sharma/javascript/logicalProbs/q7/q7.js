
var dollarCurr = document.getElementsByName("inputCurrency")[0];
dollarCurr.onblur = function() {
    var dollarVal = Number(dollarCurr.value);
    var inrCurr = document.getElementById("inrCurr");
    var yenCurr = document.getElementById("yenCurr");
    var euroCurr = document.getElementById("euroCurr");
    var poundCurr = document.getElementById("poundCurr");
    inrCurr.innerHTML = (dollarVal*74.28).toFixed(2) + ' INR';
    yenCurr.innerHTML = (dollarVal*109.14).toFixed(2) + ' Yen';
    euroCurr.innerHTML = (dollarVal*0.84).toFixed(2) + ' Euro';
    poundCurr.innerHTML = (dollarVal*0.72).toFixed(2) + ' Pound';
}
