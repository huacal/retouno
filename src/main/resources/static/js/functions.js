const form = document.getElementById('form');
const button = document.getElementById('submitButton');
const msgAlert = document.getElementById('msgAlert');
//let name = document.getElementById('name');
let email = document.getElementById('email');
let password = document.getElementById('password');

/* let password_conf = $.trim($('password_conf').val()); */

const formIsValid = {
    email: false,
    password: false,

}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    validateForm()


})

email.addEventListener('change', (e) => {
    if (e.target.value.trim().length > 0) formIsValid.email = true
    validateEmail()

})

password.addEventListener('change', (e) => {
    if (e.target.value.trim().length > 0) formIsValid.password = true

})

const validateForm = () => {
    const formValues = Object.values(formIsValid)
    const valid = formValues.findIndex(value => value == false)
    if (valid == -1) form.submit()
    else msgAlert.innerHTML = '<span class="red">No se han rellenado los campos*</span>' //alert("El formulario no se ha rellanado")

}

const validateEmail = (email) => {
    const emailRegex = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (emailRegex.test(email)) console.log('email válido')
    else msgAlert.innerHTML = '<span class="red">Email incorrecto</span>' //console.log('email incorrecto')
}