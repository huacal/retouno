/* REGISTRO DE USUARIO */
function saveUser() {
    let name = $.trim($('name').val());
    let email = $.trim($('email').val());
    let password = $.trim($('password').val());
    let password_conf = $.trim($('password_conf').val());

    if (name != "" && email != "" && password != "" && password_conf != "") {
        if (password != password_conf) {
            alert("Claves no coinciden");
            $("#password_conf").focus();
        } else {
            $.ajax({
                url: 'www.google.com.co',
                data: JSON.stringify({
                    "email": email,
                    "password": password,
                    "name": name
                }),
                type: 'POST',
                contentType: 'application/json',
                dataType: 'json',
                error: function(response) {
                    alert("Usuario no resgistrado")
                    console.log(response);
                },

                success: function(result) {
                    console.log(result);
                    if (result.id == null) {
                        alert("No se puede crear la cuenta");
                        $("#name").focus();
                        $("#email").focus();
                    } else {
                        alert("La cuenta se creo correctamente.");
                    }
                    $(':input').val(" ");
                    $('#name').focus();

                }

            });
        }
    }

    return false;
}

/* LOGIN USUARIO */

function login() {
    let email = $.trim($('email').val());
    let password = $.trim($('password').val());
    if (email != "" && password != "") {
        $.ajax({
            url: 'www.google.com.co' + email + password,
            contenType: 'application/json',
            dataType: 'json',
            error: function(response) {
                alert("Usuario no existe")
                console.log(response);
            },

            success: function(result) {
                console.log(result);
                if (result.id == null) {
                    alert("No existe un usuario con estos datos");
                } else {
                    alert("Se ha registrado correctamente" + result.name);
                }
                $(':input').val("");
                $('#email').focus();
            }

        });
        return false;
    }
}







/* function saveUser() {
    alert("ok");
    let name = $.trim($('name').val());
    let email = $.trim($('email').val());
    let password = $.trim($('password').val());
    let password_conf = $.trim($('password_conf').val());

    if (name != "" && email != "" && password != "" && password_conf != "") {
        if (password != password_conf) {
            alert("Claves no coinciden");
            $("#password_conf").focus();
        } else {
            $.ajax({
                url: 'http://localhost:8080/api/user/new',
                data: JSON.stringify({
                    "email": email,
                    "password": password,
                    "name": name
                }),
                type: 'POST',
                contentType: 'application/json',
                dataType: 'json',
                error: function(response) {
                    alert("Usuario no resgistrado")
                    console.log(response);
                },

                success: function(result) {
                    console.log(result);
                    if (result.id == null) {
                        alert("No se puede crear la cuenta");
                        $("#name").focus();
                        $("#email").focus();
                    } else {
                        alert("La cuenta se creo correctamente.");
                    }
                    $(':input').val(" ");
                    $('#name').focus();

                }

            });
        }
    }

    return false;
} */



/* LOGIN USUARIO */

/* function login() {
    let email = $.trim($('email').val());
    let password = $.trim($('password').val());
    if (email != "" && password != "") {
        $.ajax({
            url: 'www.google.com.co' + email + password,
            contenType: 'application/json',
            dataType: 'json',
            error: function(response) {
                alert("Usuario no existe")
                console.log(response);
            },

            success: function(result) {
                console.log(result);
                if (result.id == null) {
                    alert("No existe un usuario con estos datos");
                } else {
                    alert("Se ha registrado correctamente" + result.name);
                }
                $(':input').val("");
                $('#email').focus();
            }

        });
        return false;
    }
} */