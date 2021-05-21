function pluse() {
    var num1, num2, result;

    num1 = document.getElementById('num1').value;
    num1 = parseInt(num1)
    console.log(num1);

    num2 = document.getElementById('num2').value;
    num2 = parseInt(num2);
    console.log(num2);

    result = num1 + num2;
    console.log(result);

    document.getElementById('out').innerHTML = result;

}

function subtraction() {
    var num1, num2, result;

    num1 = document.getElementById('num1').value;
    num1 = parseInt(num1)

    num2 = document.getElementById('num2').value;
    num2 = parseInt(num2);

    result = num1 - num2;

    document.getElementById('out').innerHTML = result;
}

function multiplication() {
    var num1, num2, result;

    num1 = document.getElementById('num1').value;
    num1 = parseInt(num1)


    num2 = document.getElementById('num2').value;
    num2 = parseInt(num2);

    result = num1 * num2;
    console.log(result);

    document.getElementById('out').innerHTML = result;
}

function division() {
    var num1, num2, result;

    num1 = document.getElementById('num1').value;
    num1 = parseInt(num1)


    num2 = document.getElementById('num2').value;
    num2 = parseInt(num2);
    if (num2 == 0) {
        alert(" На ноль делить нельзя!");
    } else {
        result = num1 / num2;
        document.getElementById('out').innerHTML = result;
    }
}