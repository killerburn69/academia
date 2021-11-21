const counters = document.querySelectorAll('.counter')
counters.forEach((counter)=>{
    counter.innerText = '0'

    const updateCounter = ()=>{
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText
        const increment = target/200
        // console.log(increment);
        if(c<target){
            counter.innerText = `${Math.ceil(c+increment)}`
            setTimeout(updateCounter, 50);
        }
    }
    updateCounter();
})



const navbar = document.querySelector('.nav')
const btnToggle = document.querySelector('.toggle-btn')
btnToggle.addEventListener('click', ()=>{
    navbar.classList.toggle('activeNav')
})
// accordion
const accordion = document.getElementsByClassName('contentBox')
for(var i = 0;i<accordion.length;i++){
    accordion[i].addEventListener('click', function(){
        this.classList.toggle('activeBox')
    })
}