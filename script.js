function clearAll() { // clear the screen
    document.getElementById('result').innerHTML = " ";
}

function displayVal(newValue) { // adding the new value to the existing
    document.getElementById('result').innerHTML = + newValue;
}

function equal() { // equal
    let n1 = document.getElementById('result').value;
    let n2 = eval(n1);
    document.getElementById('result').innerHTML = n2;
}