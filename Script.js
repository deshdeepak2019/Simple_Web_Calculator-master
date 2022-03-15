function solve() {
    x = document.getElementById('input').value;
    var a, b, op = '@';
    for (var i = 0; i < x.length; i++) {
        if (x[i] == '+' || x[i] == '-' || x[i] == '*' || x[i] == '/' || x[i] == '!') {
            op = x[i];
            a = x.substr(0, i);
            b = x.substr(i + 1, x.length - i - 1);
            break;
        }
    }
    var ans;
    a = parseInt(a);
    b = parseInt(b);
    if (op == '+') {
        ans = a + b;
    } else if (op == '-') {
        ans = a - b;
    } else if (op == '*') {
        ans = a * b;
    } else if (op == '/') {
        ans = parseFloat(a / b);
    } else if (op == '!') {
        var tmp = 1;
        for (var i = 1; i <= b; i++) {
            tmp *= i;
        }
        ans = tmp;
    } else if (op == '@') {
        ans = "No Operator Found! Try Again";
    } else {
        ans = "Not a valid Input! Try Again";
    }
    document.getElementById('output').innerHTML = "Answer = " + ans;

}

function empty() {
    document.getElementById('input').value = null;
}