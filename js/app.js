
const LISTA_USUARIO = [
    { name: "Jose", email: "joseLuis@gmail.com", password: "jose123" },
    { name: "Manuel", email: "manuelAlejandro@gmail.com", password: "mauel123" },
    { name: "Luis", email: "luisAlvarez@gmail.com", password: "luis123" }
];

let usuario = {
    name: '',
    email: '',
    password: ''
}

let userNameValue = document.getElementById("nameText");
let userEmailValue = document.getElementById("emailText");
let userPasswordValue = document.getElementById("passwordText");
let invalidData1 = document.getElementById("invalid-feedback1"); /* name div de invalid */
let invalidData2 = document.getElementById("invalid-feedback2"); /* name div de invalid */
let invalidData3 = document.getElementById("invalid-feedback3"); /* name div de invalid */

let validarEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

let btnSingUp = document.getElementById('button-singUp');

var datoInvalidoFunction;

let contadorValidoSingUp = 0;

/* REGISTER SECTION */
btnSingUp.addEventListener("click",function singUp(){


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
/* ARREGLAR EL VALIDAR EMAIL*/

        if (userNameValue.value !==""){
            userNameValue.classList.remove("invalid");
            userNameValue.classList.add("valid");
            invalidData1.style.display = "none";
            contadorValidoSingUp =+ 1;
        }
/* ARREGLAR EL VALIDAR EMAIL*/

        if (userEmailValue.value !=="" && validarEmail.test(userEmailValue.value) == true){

            userEmailValue.classList.remove("invalid");
            userEmailValue.classList.add("valid");
            invalidData2.style.display = "none";
            contadorValidoSingUp += 1;
            
        }

        else if(userEmailValue.value !=="" && validarEmail.test(userEmailValue.value == false)){

            userEmailValue.classList.remove("valid")
            userEmailValue.classList.add("invalid");
            invalidData2.style.display = "block";

        }

        if(validarEmail.test(userEmailValue.value == false)){
            userEmailValue.classList.remove("valid")
            userEmailValue.classList.add("invalid");
            console.log(validarEmail.test(userEmailValue.value));
            contadorValidoSingUp += 1;
        }

        if (userPasswordValue.value !==""){
            userPasswordValue.classList.remove("invalid");
            userPasswordValue.classList.add("valid");
            invalidData3.style.display = "none";
            contadorValidoSingUp += 1;
    }   
        if(contadorValidoSingUp == 3){
            enterLogin();
        }
            
    }

    function borrarDatosInput(){
        
        if(contadorValidoSingUp == 3){
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
        

    }

    datoValido();

    function enterLogin(){
        alert("Registro Exitoso!")
        let formBoxLogin = document.getElementById("login-form-box");
        formBoxLogin.style.top = "32%";
    
    }

    /* validar si el input no es vacìo, enviar formulario */

    if((userNameValue.value !=="") && (userEmailValue.value !=="") && (userPasswordValue.value !=="")){
        usuario.name = userNameValue.value;
        usuario.email = userEmailValue.value;
        usuario.password = userPasswordValue.value;
        console.log(usuario);
         borrarDatosInput();
        
    }

    else{
        datoInvalido();
    }
    
    LISTA_USUARIO.push(usuario);
    
    console.log()
    

})

/*---------- LOGIN -----------*/
let btnLogin = document.getElementById("button-login");
let loginName = document.getElementById("nameTextLogin")
let loginPassword = document.getElementById("nameTextSingUp");


btnLogin.addEventListener("click",function login(event){
    event.preventDefault()
    console.log(LISTA_USUARIO)

    LISTA_USUARIO.forEach(function(person){
        if(person.email === loginName.value && person.password === loginPassword.value){
            console.log("Inicio exitoso");
        }
        else if(person.email != loginName.value || person.password != loginPassword.value){
            console.log("Usuario o contraseña invàlido, intente de nuevo")
        }
        else{
            console.log("Usuario invàlido")
        }
    });
    /* COMPARAR OBJETO NAME CON LOGIN NAME */

}) 


/* PRUEBA PONER Y QUITAR CLASE QUE INFORME*/

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

// let usuarios = [];

// let usuario = {
//     name: '',
//     email: '',
//     password: ''
// }

// let btnSingUp = document.getElementById('button-singUp');


// btnSingUp.addEventListener("click",function singUp(){

//     let userNameValue = document.getElementById("nameText");
//     let userEmailValue = document.getElementById("emailText");
//     let userPasswordValue = document.getElementById("passwordText");
//     let invalidData1 = document.getElementById("invalid-feedback1"); /* name div de invalid */
//     let invalidData2 = document.getElementById("invalid-feedback2"); /* name div de invalid */
//     let invalidData3 = document.getElementById("invalid-feedback3"); /* name div de invalid */
    

//     /* validar si el input no es vacìo, enviar formulario */

//     if((userNameValue.value !=="") && (userEmailValue.value !=="") && (userPasswordValue.value !=="")){
//         usuario.name = userNameValue.value;
//         usuario.email = userEmailValue.value;
//         usuario.password = userPasswordValue.value;
//         console.log(usuario);
//         datoInvalido();
//     }

//     else{
//         borrarDatosInput();
//     }


//     /* si es invàlido o vacìo el dato */
     

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

//     if (userEmailValue.value !==""){
//         userEmailValue.classList.remove("invalid");
//         userEmailValue.classList.add("valid");
//         invalidData2.style.display = "none";
//     }

//     if (userPasswordValue.value !==""){
//         userPasswordValue.classList.remove("invalid");
//         userPasswordValue.classList.add("valid");
//         invalidData3.style.display = "none";
//     }
//     }

//     function borrarDatosInput(){
        
//         userNameValue.value = "";
//         userEmailValue.value = "";
//         userPasswordValue.value = "";
//         userNameValue.classList.remove("valid");
//         userNameValue.classList.remove("invalid");
//         userEmailValue.classList.remove("valid");
//         userEmailValue.classList.remove("invalid");
//         userPasswordValue.classList.remove("valid");
//         userPasswordValue.classList.remove("invalid");
//         invalidData1.style.display = "none";
//         invalidData2.style.display = "none";
//         invalidData3.style.display = "none";

//     }

//     datoValido();
//     datoInvalido();
//     // enterLogin();
    



    

// })


// function enterLogin(){
//     let formBoxLogin = document.getElementById("login-form-box");
//     formBoxLogin.style.top = "32%";
//     console.log(formBoxLogin);
//     console.log("LOGFORM")



// }