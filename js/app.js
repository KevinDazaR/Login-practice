let usuarios = [];


function singUp(){

    let userNameValue = document.getElementBy("nameText").value;

    let userEmailValue =document.getElementById("emailText").value;
    
    let userPasswordValue =document.getElementById("passwordText");
    
    console.log(userPasswordValue.value)

    let usuario = {
        name: userNameValue,
        email: userEmailValue,
        password: userPasswordValue
    }

    usuarios.push(usuario);
    
    console.log(usuario.name)

}

