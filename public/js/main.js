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


const userName = document.querySelector('#username')
const password = document.querySelector('#password')
const btn = document.querySelector('button')

btn.addEventListener('click', () => {
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
})