

var typed = new Typed(".auto-type",{
    strings : ["AKKODIS","THE FUTURE"],
   typeSpeed : 150,
   backSpeed : 150,
   loop : false})

let section=document.querySelectorAll('section')
let navlink=document.querySelectorAll('header nav a')
window.onscroll=()=>{
    section.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop-1;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')
        if (top>offset && top<offset + height){
            navlink.forEach(links=>{
                links.classList.remove('active')
                document.querySelector('header nav a[href*='+id+']').classList.add('active')
            })
        }
    })
}
