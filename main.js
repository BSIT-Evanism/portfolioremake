import 'virtual:uno.css'
import 'virtual:unocss-devtools'
import '@unocss/reset/tailwind.css'
import {animate, scroll} from 'motion'

const cursor = document.querySelector('.cursorcustom');
const imgwrap = document.querySelector('.imgwrapper');
let isOver = false;
// const imgwrapper = document.querySelector('.imgwrap');

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

imgwrap.addEventListener('mouseover', (e) => {
    isOver = true;
})

imgwrap.addEventListener('mouseleave', (e) => {
    isOver = false;
})

document.addEventListener('mousemove', (e) => {
    if (isOver) {

    const x = e.clientX;
    const y = e.clientY;
    const {width,height, left, top} = imgwrap.getBoundingClientRect();
        
    const midX = x - (left + width / 2) * 40;
    const midY = y - (top + height / 2) * 40;
    // const offsetX = ((x - midX) / midX) * 40;
    // const offsetY = ((x - midY) / midY) * 40;
    // console.log(isOver)
    
    imgwrap.style.setProperty("--rotateX", -1 * midY + "deg");
    imgwrap.style.setProperty("--rotateY", -1 * midX + "deg");
}

})

imgwrap.addEventListener('mouseleave', () => {
    imgwrap.style.setProperty("--rotateX", "0deg")
    imgwrap.style.setProperty("--rotateY", "0deg")
})
