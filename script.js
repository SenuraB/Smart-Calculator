function clearAll() { // clear the screen
    document.getElementById('result').value = ""
}

function displayVal(newValue) { // adding the new value to the existing
    document.getElementById('result').value += newValue;
}

function equal() { // equal
    let n1 = document.getElementById('result').value;
    let n2 = eval(n1);
    document.getElementById('result').value = n2;
}