let containerss = document.querySelector(".containerss");
let timeNow = new Date().getHours();
// timeNow=10;
console.log(timeNow);
let greeting =
  timeNow >= 5 && timeNow < 12
    ? "Good Morning"
    : timeNow >= 12 && timeNow < 18
    ? "Good Afternoon"
    : "Good Evening";
console.log(greeting);
containerss.innerHTML = `<h2>${greeting}</h2>`;

// typing-text
var typed = new Typed('.auto-type',{
    strings : ['Programmer','Designer','Frontend-Developer'],
    typeSpeed : 150,
    backSpeed : 150,
    looped : true,
});
    document.addEventListener('touchmove', function(event) {
            if (event.scale !== 1) {
                event.preventDefault();
            }
        }, { passive: false });
