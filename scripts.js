const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');

const clock = setInterval( function time() {

    let date = new Date();

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    let d = date.getDate();
    let m2 = date.getMonth() + 1;
    let y = date.getFullYear();
    
    h < 10 ? hours.textContent = `0${h}` : hours.textContent = h // HORAS
    m < 10 ? minutes.textContent = `0${m}` : minutes.textContent = m // MINUTOS
    s < 10 ? seconds.textContent = `0${s}` : seconds.textContent = s // SEGUNDOS
    
    d < 10 ? day.textContent = `0${d}` : day.textContent = d // DIA
    m2 < 10 ? month.textContent = `0${m2}` : month.textContent = m2 // MÊS
    year.textContent = y // ANO

} )