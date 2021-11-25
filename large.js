function largest() {
    var num1 = (document.getElementById("first").value);
    var num2 = (document.getElementById("second").value);
    var num3 = (document.getElementById("third").value);
    var num4 = (document.getElementById("fourth").value);
    var num5 = (document.getElementById("fifth").value);



    if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5) {
        window.alert(num1 + " is largest number");
    }
    else if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5) {
        window.alert(num2 + " is largest number");
    }
    else if (num3 > num1 && num3 > nub2 && num3 > num4 && num3 > num5) {
        window.alert(num3 + " is largest number");

    }
    else if (num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5) {
        window.alert(num4 + " is largest number");

    }
    else{
        window.alert(num5 + " is largest number");

    }
}
