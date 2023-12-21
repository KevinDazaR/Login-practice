// let usuarios = [];


// function singUp(){

//     let userNameValue = document.getElementBy("nameText").value;

//     let userEmailValue =document.getElementById("emailText").value;
    
//     let userPasswordValue =document.getElementById("passwordText");
    
//     console.log(userPasswordValue.value)

//     

//     usuarios.push(usuario);
    
//     console.log(usuario.name)

// }

let usuarios = [];

let usuario = {
    name: '',
    email: '',
    password: ''
}

let btnSingUp = document.getElementById('button-singUp');

console.log(btnSingUp);


btnSingUp.addEventListener("click",function singUp(){

    let userNameValue = document.getElementById("nameText");
    let userEmailValue = document.getElementById("emailText");
    let userPasswordValue = document.getElementById("passwordText");
    let invalidData1 = document.getElementById("invalid-feedback1"); /* name div de invalid */
    let invalidData2 = document.getElementById("invalid-feedback2"); /* name div de invalid */
    let invalidData3 = document.getElementById("invalid-feedback3"); /* name div de invalid */
    
    console.log(invalidData1,invalidData2,invalidData3)

    /* validar si el input no es vacìo, enviar formulario */

    if((userNameValue.value !=="") && (userEmailValue.value !=="") && (userPasswordValue.value !=="")){
        
        usuario.name = userNameValue.value;
        usuario.email = userEmailValue.value;
        usuario.password = userPasswordValue.value;
        
        borrarDatosInput();
        console.log(usuario)
    }

    else{
       
    }


    /* si es invàlido o vacìo el dato */
     

    function datoInvalido(){

        if (userNameValue.value ==""){
            userNameValue.classList.add("invalid");
            invalidData1.style.display = "block";
        }
        
        else if (userEmailValue.value ==""){
            userEmailValue.classList.add("invalid");
            invalidData2.style.display = "block";
        }
        else if (userPasswordValue.value ==""){
            userPasswordValue.classList.add("invalid");
            invalidData3.style.display = "block";
        }
        else{
            console.log("nada")
        }
        console.log(usuario)
    
    }

    
    /* si es vàlido el dato */

    function datoValido(){
       
    if (userNameValue.value !==""){
        userNameValue.classList.remove("invalid");
        userNameValue.classList.add("valid");
        invalidData1.style.display = "none";
    }

    if (userEmailValue.value !==""){
        userEmailValue.classList.remove("invalid");
        userEmailValue.classList.add("valid");
        invalidData2.style.display = "none";
    }

    if (userPasswordValue.value !==""){
        userPasswordValue.classList.remove("invalid");
        userPasswordValue.classList.add("valid");
        invalidData3.style.display = "none";
    }
    }

    function borrarDatosInput(){
        
        userNameValue.value = "";
        userEmailValue.value = "";
        userPasswordValue.value = "";
        userNameValue.classList.remove("valid");
        userNameValue.classList.remove("invalid");
        userEmailValue.classList.remove("valid");
        userEmailValue.classList.remove("invalid");
        userPasswordValue.classList.remove("valid");
        userPasswordValue.classList.remove("invalid");
        invalidData1.style.display = "none";
        invalidData2.style.display = "none";
        invalidData3.style.display = "none";

    }

    datoValido();
    datoInvalido();
    



    

})




/* PRUEBA PONER Y QUITAR CLASE QUE INFORME*/

// else if ((userNameValue.value !=="") || (userEmailValue.value !=="") || (userPasswordValue.value !=="")){
//     // userNameValue.style.borderColor = "red";
//     userNameValue.classList.toggle("valid");
//     userEmailValue.classList.toggle("valid");
//     userPasswordValue.classList.toggle("valid");
// }

// else if ((userNameValue.value =="") || (userEmailValue.value =="") || (userPasswordValue.value =="")){
//     // userNameValue.style.borderColor = "red";
//     userNameValue.classList.toggle("invalid");
//     userEmailValue.classList.toggle("invalid");
//     userPasswordValue.classList.toggle("invalid");
// }

// let usuarios = [];


// function singUp(){

//     let userNameValue = document.getElementBy("nameText").value;

//     let userEmailValue =document.getElementById("emailText").value;
    
//     let userPasswordValue =document.getElementById("passwordText");
    
//     console.log(userPasswordValue.value)

//     

//     usuarios.push(usuario);
    
//     console.log(usuario.name)

// }
/* BACKUP
let usuarios = [];

let usuario = {
    name: '',
    email: '',
    password: ''
}

let btnSingUp = document.getElementById('button-singUp');

console.log(btnSingUp);


btnSingUp.addEventListener("click",function singUp(){

    let userNameValue = document.getElementById("nameText");
    let userEmailValue = document.getElementById("emailText");
    let userPasswordValue = document.getElementById("passwordText");
    let invalidData1 = document.getElementById("invalid-feedback1"); /* name div de invalid */
//     let invalidData2 = document.getElementById("invalid-feedback2"); /* name div de invalid */
//     let invalidData3 = document.getElementById("invalid-feedback3"); /* name div de invalid */
    
//     console.log(invalidData1,invalidData2,invalidData3)

//     if((userNameValue.value !=="") && (userEmailValue.value !=="") && (userPasswordValue.value !=="")){
        
//         usuario.name = userNameValue.value;
//         usuario.email = userEmailValue.value;
//         usuario.password = userPasswordValue.value;
//         console.log(usuario)
//     }
//     /* si es invàlido o vacìo el dato */
     
//     function borrarDatosInput(){
//         userNameValue.value = "";
//         userEmailValue.value = "";
//         userPasswordValue.value = "";
//     }
    
    
//     function datoInvalido(){

//         if (userNameValue.value ==""){
//             userNameValue.classList.add("invalid");
//             invalidData1.style.display = "block";
//         }
        
//         else if (userEmailValue.value ==""){
//             userEmailValue.classList.add("invalid");
//             invalidData2.style.display = "block";
//         }
//         else if (userPasswordValue.value ==""){
//             userPasswordValue.classList.add("invalid");
//             invalidData3.style.display = "block";
//         }
//         else{
//             console.log("nada")
//         }
//         console.log(usuario)
    
//     }

    
//     /* si es vàlido el dato */

//     function datoValido(){
       
//     if (userNameValue.value !==""){
//         userNameValue.classList.remove("invalid");
//         userNameValue.classList.add("valid");
//         invalidData1.style.display = "none";
//     }

//     else if (userEmailValue.value !==""){
//         userNameValue.classList.remove("invalid");
//         userNameValue.classList.add("valid");
//         invalidData2.style.display = "none";
//     }

//     else if (userEmailValue.value !==""){
//         userNameValue.classList.remove("invalid");
//         userNameValue.classList.add("valid");
//         invalidData3.style.display = "none";
//     }
//     }

//     datoValido();
//     datoInvalido();
//     borrarDatosInput();



    

// })
// */