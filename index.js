const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark':'light'
const getCurrentIcon = () => themeButton.body.classList.contains(iconTheme) ? 'bx-moon':'bx-sun'

if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}




themeButton.addEventListener('click', ()=> {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem( 'selected-theme', getCurrentTheme() )
    localStorage.setItem( 'selected-icon', getCurrentIcon() )
})


const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

function scrollTop(){
    const scrollTop = document.getElementById('scroll-top')

    if(this.scrollY >= 560)
    scrollTop.classList.add("scroll-top");
    else scrollTop.classList.remove("scroll-top")
}

window.addEventListener("scroll", scrollTop)



const sr = ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: '3500',
    reset: true
});

sr.reveal('.home, .about, .products, .button2, .contact, .sub, .footer'),{
    interval: 200
}