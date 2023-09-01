const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')

const form = document.getElementById('form')


form.addEventListener('submit', (e) => {
    e.preventDefault()

    fetch("http://localhost:4000/auth/register", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username.value,
            email: email.value,
            password: password.value
        })
    })
        .then(res => res.json())
        .then(data => {
            const {token} = data

            window.localStorage.setItem('token', token)
        })

    console.log(username.value)
   
})

