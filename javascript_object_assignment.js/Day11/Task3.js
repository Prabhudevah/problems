const btn = document.getElementById('input');
const output = document.getElementById('output');
btn.addEventListener('input', function() {
    output.innerText = btn.value;
});
