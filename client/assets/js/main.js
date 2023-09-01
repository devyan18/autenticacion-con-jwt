const form = document.getElementById('form')
 
// me manda a dashboard si es que existe una sesión activa
document.addEventListener('DOMContentLoaded', () => {
    const token = window.localStorage.getItem('token')
    
   if(token){
    fetch("http://localhost:4000/auth/user", {
        method: "GET",
        headers: {
            'authorization': token
        }
    })
        .then(res => res.json())
        .then(data => {
            if(data.email) {
                window.location.href = 'http://localhost:5500/client/dashboard.html'
            }
        })
   }
})


form.addEventListener('submit', (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)

    const email = formData.get('email')
    const password = formData.get('password')


    fetch("http://localhost:4000/auth/login", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    })
        .then(res => res.json())
        .then(data => {
            const {token} = data

            window.localStorage.setItem('token', token)

            window.location.href = 'http://localhost:5500/client/dashboard.html'
        })
})