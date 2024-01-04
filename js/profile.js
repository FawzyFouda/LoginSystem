// ----------------------logout function---------------------------------------------------
 function logout(){                                 // after log out remove name and email from local storage
    localStorage.removeItem('name')
    localStorage.removeItem('email')
    window.location.href = `index.html`
}

// -----if user try to back to profile after log out ,he can not access to profile befor log in again--------------------------------------
document.getElementById('user-profile').innerHTML = `${localStorage.getItem('name')} profile`
let name = localStorage.getItem('name')?localStorage.getItem('name'):''
if(name ==''){
window.location.href = `index.html`
}