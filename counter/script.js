var button1 = document.getElementById('plus');
var button2 = document.getElementById('minus');
var counter = document.getElementById('counter');
var input = document.getElementById('input');
var reset = document.getElementById('reset');
counterdisplay = counter.innerHTML;
numberdisplay = input.innerHTML;
 

button1.addEventListener('click', () => {
    const countvalue = parseInt(counter.innerText);
    const inputvalue = parseInt(input.value);
    counter.innerText = countvalue + inputvalue;
    // counterdisplay++;
    // counter.innerHTML = counterdisplay;
});

button2.addEventListener('click', () => {
    const countvalue = parseInt(counter.innerText);
    const inputvalue = parseInt(input.value);
    counter.innerText = countvalue - inputvalue;
});

reset.addEventListener('click', () => {
    counter.innerText = 0;
    input.value = 0;
});

