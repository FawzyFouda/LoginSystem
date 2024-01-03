let signupNameInput = document.getElementById('signupName'),
    signupEmailInput = document.getElementById('signupEmail'),
    signupPasswordInput = document.getElementById('signupPassword'),
    validMessageInput = document.getElementById('exist'),
    loginvalidMessage = document.getElementById('incorrect'),
    signupBtn = document.getElementsByTagName('button'),
    loginEmailInput = document.getElementById('signinEmail'),
    loginPassInput = document.getElementById('signinPassword'),
    loginBtn = document.getElementsByTagName('button'),
    userName = document.getElementById('username')

let usersInfo =[]
if(localStorage.getItem('userslist') !== null){
    usersInfo = JSON.parse(localStorage.getItem('userslist'));
}
// -------------------------------- validate email if it is registered or not --------------------------------
function addNewUser(){
const result = usersInfo.some(el => el.email === signupEmailInput.value);
        if (!result){
            let userInfo = {name:signupNameInput.value,email:signupEmailInput.value,pass:signupPasswordInput.value}
            usersInfo.push(userInfo)
            localStorage.setItem('userslist', JSON.stringify(usersInfo))
            validMessageInput.innerHTML = '<span class="text-success m-3">Registration done</span>'
            clearInput()
        } else{
            validMessageInput.innerHTML = '<span class="text-danger m-3">Email is alredy exist</span>'
        }
}
// -------------------------------- clearInput --------------------------------
function clearInput(){
    signupNameInput.value = ''
    signupEmailInput.value = ''
    signupPasswordInput.value = ''
}