import 'virtual:uno.css'
import 'virtual:unocss-devtools'
import '@unocss/reset/tailwind.css'
import { animate, scroll, spring, stagger, inView } from 'motion'

const cursor = document.querySelector('.cursorcustom');
const imgwrap = document.querySelector('.imgwrapper');
const imgwrapper = document.querySelector('.imgwrap');
const marker = document.querySelectorAll('.marker')
const marquee = document.querySelector(".marquee")
const wrap = document.querySelector(".scrollwrap")
const accord = document.querySelector(".accordion_middle");
const accordimage = document.querySelector(".accordion_image")
const accordinner = document.querySelectorAll(".accordion_inner")

const scrollOpts = {
  target: imgwrapper,
  offset: ["start end", "end end"]
}


inView(imgwrap, () => {
  animate('h2 span', { opacity: [0.2, 1], rotateX: ["90deg", 0] }, { delay: stagger(0.1, { from: "first" }) })
  animate('.imgwrapper', { opacity: [0, 1], translateY: [-1000, 0] }, { duration: 2, easing: 'ease' })
})

// for (let i = 0; i < accordinner.length; i++) {
//   accordinner[i].addEventListener('mouseover', () => {
//     animate(accordinner[i], { height: '50vh' }, { easing: "linear" })
//   })
//   accordinner[i].addEventListener('mouseleave', () => {
//     animate(accordinner[i], { height: "auto" })
//   })
// }

scroll(
  animate(".software", { x: [0, "-100vw"] })
)
scroll(
  animate(".engineer", { x: [0, "100vw"] })
)
scroll(
  animate(".mainimage", { y: [0, "50vh"], scale: [1, 2], opacity: [1, 0] })
)

scroll(
  animate('.innerimage', { y: [0, "-50vh"] }, { delay: 0.5 })
)


document.addEventListener('mousemove', function(e) {
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.left = x + 'px';
  cursor.style.top = y + 'px';
});
for (let i = 0; i < marker.length; i++) {

  marker[i].addEventListener('mouseover', () => {
    animate(cursor, { scale: 4.5, opacity: 0.3 }, { easing: spring() })
  })

  marker[i].addEventListener('mouseleave', () => {
    animate(cursor, { scale: 1, opacity: 0.6 }, { easing: spring() })
  })
}

animate(marquee, { x: "-50%" }, { duration: 10, repeat: Infinity, easing: "linear" })

document.addEventListener('mouseleave', function(e) {
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = x + 'px';
  cursor.style.transform = y + 'px';
  animate(cursor, { scale: 1, opacity: 0 }, { duration: 0.5, ease: "ease-in-out" })
});

document.addEventListener('mouseenter', function(e) {
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.left = x + 'px';
  cursor.style.top = y + 'px';
  animate(cursor, { scale: 1, opacity: 1 }, { duration: 0.5, ease: "ease-in-out" })
});

imgwrap.addEventListener('mousemove', imgMouse)
imgwrap.addEventListener('mouseleave', imgReset)

function imgMouse(e) {

  const { top, left, width, height } = imgwrap.getBoundingClientRect();
  const centerX = left + width / 2;
  const centerY = top + height / 2;
  const mouseX = e.clientX - centerX;
  const mouseY = e.clientY - centerY;
  const rotateX = 20 * (mouseX / (height / 2));
  const rotateY = 20 * (mouseY / (width / 2));

  animate(".imgwrap", { rotateX: -1 * rotateY, rotateY: rotateX }, { easing: spring() })

}

function imgReset() {
  animate(".imgwrap", { rotateX: 0, rotateY: 0 }, { easing: spring() })
}

inView(accordinner[1], () => {
  animate(accordimage, { x: [-500, 0] }, { duration: 1, easing: spring() })
})



