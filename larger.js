function larger() {
    let num1 =(document.getElementById("first").value);
    let num2 =(document.getElementById("second").value);

    if (num1 > num2) {
        window.alert(num1+ " is Larger than " +num2);
    }
    else {
        window.alert(num2+ " is Larger than " +num1);
    }
}
