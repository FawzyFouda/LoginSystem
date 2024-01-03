// --------------------------------show & hide password --------------------------------
document.getElementById('pass-icon-signin').addEventListener('click', () => {
    const type = loginPassInput.getAttribute('type') === "password" ? 'text' : 'password'
    loginPassInput.setAttribute("type", type);
    if(type == 'text'){
        document.querySelector('#pass-icon-signin li i').classList.replace('fa-eye-slash','fa-eye')
    }else if(type == 'password'){
        document.querySelector('#pass-icon-signin li i').classList.replace('fa-eye','fa-eye-slash')
    }
})

function login(){
    if(loginEmailInput.value =='' || loginPassInput.value ==''){
        loginvalidMessage.innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
    }else{
        // access to profile after 0.5 seconds
        setInterval(() =>{
            const loginUsers = usersInfo.some((el) =>{return el.email == loginEmailInput.value && el.pass == loginPassInput.value});
            if(loginUsers){
                let currentUsers = usersInfo.filter((el) =>{return el.email == loginEmailInput.value && el.pass == loginPassInput.value})[0]
                localStorage.setItem("name",currentUsers.name)
                localStorage.setItem("email",currentUsers.email)
                if(localStorage.getItem("name") !=='' && localStorage.getItem("email") !==''){
                    window.location.href = `profile.html`
                }
            }else{
                
                loginvalidMessage.innerHTML = '<span class="text-danger m-3">Email or Password is incorrect</span>'
            }
        },0.5)
    }
}