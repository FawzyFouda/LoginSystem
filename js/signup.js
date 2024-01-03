// --------------------------------show & hide password --------------------------------
document.getElementById('pass-icon').addEventListener('click', () => {
    const type = signupPasswordInput.getAttribute('type') === "password" ? 'text' : 'password'
    signupPasswordInput.setAttribute("type", type);
    if(type == 'text'){
        document.querySelector('#pass-icon li i').classList.replace('fa-eye-slash','fa-eye')
    }else if(type == 'password'){
        document.querySelector('#pass-icon li i').classList.replace('fa-eye','fa-eye-slash')
    }
})
 
function signUp(){
    if(signupEmailInput.value =='' || signupPasswordInput.value =='' || signupNameInput.value == ''){
        validMessageInput.innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
    }else{
// -------------------------------- email validate --------------------------------
        if(signupEmailInput.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
            validMessageInput.innerHTML = '<span class="text-danger m-3">Please enter a valid email</span>'
// -------------------------------- password validate --------------------------------
            if(signupPasswordInput.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{5,}$/g)){
                addNewUser()
            }else{
                validMessageInput.innerHTML = '<span class="text-danger m-3">Please Enter Password Contains numbers and Capital, Small Letters and Speacial caracters</span>'
            }
            }else{
                validMessageInput.innerHTML = '<span class="text-danger m-3">Please enter a valid email</span>'
            }
        
    }
}
