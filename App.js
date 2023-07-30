const btn = document.querySelector('#btn');

 function btnclick() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let bule = Math.floor(Math.random() * 255);
    
    let color = `rgb(${red},${green},${bule})`
    return color;
}

btn.addEventListener('click', function() {
    let h3 = document.querySelector('.rgb');
    let randomColor = btnclick();
    h3.innerText = randomColor;
    
    let div = document.querySelector('div');

    div.style.backgroundColor = randomColor;
});