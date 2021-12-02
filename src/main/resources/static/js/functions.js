/* Registro UsuarioNuevo */

const button = document.getElementById('submitRegister');
const msgAlert = document.getElementById('msgAlert');
const formRegister = document.getElementById('formRegistrer');
const inputs = document.querySelectorAll('#formRegistrer input');
const inputsLogin = document.querySelectorAll('#form2 input');
const form2 = document.getElementById('form2');

const expresionsFields = {
    nameField: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
    passwordField: /^.{4,12}$/, // 3 a 12 digitos.
    emailField: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    phoneField: /^\d{7,14}$/ // 7 a 14 numeros.
}

const fields = {
    names: false,
    email: false,
    password: false
}

const validateEmail = (e) => {
    switch (e.target.name) {
        case "names":
            validFields(expresionsFields.nameField, e.target, 'names');
            break;
        case "email":
            validFields(expresionsFields.emailField, e.target, 'email');
            break;
        case "password":
            validFields(expresionsFields.passwordField, e.target, 'password');
            validPasswordConf();
            break;
        case "passwordConf":
            validPasswordConf();
            break;
    }
}


const validPasswordConf = () => {
    const inputPassword1 = document.getElementById('password');
    const inputPassword2 = document.getElementById('passwordConf');

    if (inputPassword1.value !== inputPassword2.value) {

        document.getElementById(`inputGroup-passwordConf`).classList.add('invalid');
        document.querySelector(`#inputGroup-passwordConf .text-alert-input`).classList.add('text-alert-input-activo');
        fields[password] = false;
    } else {
        document.getElementById(`inputGroup-passwordConf`).classList.remove('invalid');
        document.querySelector(`#inputGroup-passwordConf .text-alert-input`).classList.remove('text-alert-input-activo');
        fields[password] = true;
    }
}


const validFields = (expresionsFields, input, campo) => {
    if (expresionsFields.test(input.value)) {
        document.getElementById(`inputGroup-${campo}`).classList.remove('invalid');
        document.querySelector(`#inputGroup-${campo} .text-alert-input`).classList.remove('text-alert-input-activo');
        fields[campo] = true;
    } else {
        document.getElementById(`inputGroup-${campo}`).classList.add('invalid');
        document.querySelector(`#inputGroup-${campo} .text-alert-input`).classList.add('text-alert-input-activo');
        fields[campo] = false;
    }
}

const saveUser = () => {
    let names = document.getElementById('names').value.trim();
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value.trim();
    let passwordConf = document.getElementById('passwordConf').value.trim();
    if (names != "" && email != "" && password != "" && passwordConf != "") {
        if (password != passwordConf) {
            msgAlert.innerHTML = '<span class="red"><i class="fas fa-exclamation-circle"></i> Las contraseñas no coinciden</span>'
        } else {
            let newUser = {
                    "email": email,
                    "password": password,
                    "name": names
                }
                /* console.log(newUser); */
            $.ajax({
                type: 'POST',
                url: 'http://129.151.119.43:8080/api/user/new',
                data: JSON.stringify(newUser),
                contentType: 'application/json',
                dataType: 'json',
                error: function(response) {
                    msgAlert.innerHTML = '<span class="red"> <i class="fas fa-exclamation-circle"></i> Email incorrecto</span>'
                        /* console.log(response); */
                },
                success: function(result) {
                    /* console.log(result); */
                    if (result.id == null) {
                        msgAlert.innerHTML = '<span class="red"><i class="fas fa-exclamation-circle"></i> No se puede crear la cuenta</span>'
                        return email
                            /* $(":input").value = " "; */
                            /* $("#names").focus();
                            $("#email").focus(); */
                    } else {
                        msgAlert.innerHTML = '<span class="green"><i class="fas fa-check-circle"></i> Usuario creado exitosamente</span>'
                        setTimeout(() => {
                            msgAlert.innerHTML = " "
                        }, 4000);
                    }


                }
            });
        }
    }
    return false;

}

/*Login Usuario Registrado*/
const login = () => {

    let emailLogin = document.getElementById('email').value.trim();
    let passwordLogin = document.getElementById('password').value.trim();

    if (emailLogin != "" && passwordLogin != "") {
        $.ajax({
            url: 'http://129.151.119.43:8080/api/user/' + emailLogin + '/' + passwordLogin,
            contenType: 'application/json',
            dataType: 'json',
            error: function(response) {
                msgAlert.innerHTML = '<span class="red"><i class="fas fa-exclamation-circle"></i> Correo eléctronico no existe</span>'
            },

            success: function(result) {
                if (result.id == null) {
                    msgAlert.innerHTML = '<span class="red"><i class="fas fa-exclamation-circle"></i> No existe un usuario con estos datos</span>'

                } else {
                    setTimeout(function() { window.location.href = "main.html"; }, 2000);
                    /* alert("Se ha registrado correctamente" + result.name); */
                }

            }

        });
        return false;
    }

}


inputs.forEach((input) => {
    input.addEventListener('keyup', validateEmail);
    input.addEventListener('blur', validateEmail);
});

/* inputsLogin.forEach((input) => {
    input.addEventListener('keyup', validateEmail);
}); */