function sign() {
    var num1 = (document.getElementById("first").value);
    var num2 = (document.getElementById("second").value);
    var num3 = (document.getElementById("third").value);
    var mul= (num1 * num2 * num3);


    if (mul > 0) {
        window.alert("+");
    }
    else {
        window.alert("-");
    }
}