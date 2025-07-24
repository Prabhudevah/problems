let increment = 0;
document.getElementById('myButton').addEventListener('click', function() {
    increment++;
    document.getElementById('counter').innerText = increment;
});