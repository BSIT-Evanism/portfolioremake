import 'virtual:uno.css'
import 'virtual:unocss-devtools'
import '@unocss/reset/tailwind.css'
import {animate, scroll} from 'motion'

const cursor = document.querySelector('.cursorcustom');

document.addEventListener('mousemove', function(e){
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';
});

document.addEventListener('mouseleave', function(e){
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.transform = x + 'px';
    cursor.style.transform = y + 'px';
    animate(cursor, {scale: 1, opacity:0}, {duration: 0.5, ease: "ease-in-out"})
});

document.addEventListener('mouseenter', function(e){
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';
    animate(cursor, {scale: 1, opacity:1}, {duration: 0.5, ease: "ease-in-out"})
});
