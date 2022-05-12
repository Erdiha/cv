function fibonacciGenerator(n) {
    var first = 0;
    var second = 1;
    var num = [];
    var t = [];
    if (n === 1) {
        t = [0]
    } else if (n === 2) {
        t = [0, 1]
    } else {
        t = [0, 1];
        for (let i = 2; i < n; i++) {
            t.push(t[t.length - 2] + t[t.length - 1]);
        }
    }

    return console.log(t)
}
fibonacciGenerator(15);