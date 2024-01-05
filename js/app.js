let LISTA_USUARIO = [
    { name: "Jose", email: "joseLuis@gmail.com", password: "jose123", gender:'male' },
    { name: "Manuela", email: "manuelaAlejandra@gmail.com", password: "mauela123", gender:'male' },
    { name: "Luis", email: "luisAlvarez@gmail.com", password: "luis123", gender:'male'}
];


let userNameValue = document.getElementById("nameText");
let userEmailValue = document.getElementById("emailText");
let userPasswordValue = document.getElementById("passwordText");

let UsergenderSelect = document.getElementById("genderSelect");
let femaleGender = document.getElementById("female");
let maleGender = document.getElementById("female");
let otherGender = document.getElementById("female");

let invalidData1 = document.getElementById("invalid-feedback1"); /* name div de invalid */
let invalidData2 = document.getElementById("invalid-feedback2"); /* name div de invalid */
let invalidData3 = document.getElementById("invalid-feedback3"); /* name div de invalid */

let validarEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

let btnSingUp = document.getElementById('button-singUp');

var datoInvalidoFunction;
let formBoxLogin = document.getElementById("login-form-box");
let contadorValidoSingUp = 0;
var loginStyleCounter = 0;

/* REGISTER SECTION */





btnSingUp.addEventListener("click",function singUp(){

    let usuario = {
        name: '',
        email: '',
        password: '',
        gender:''
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
            UsergenderSelect.value = "default";
            // userPasswordValue.value = ""; /* FALTA QUITAR EL VALUE DEL GENERO */
            userNameValue.classList.remove("valid");
            userNameValue.classList.remove("invalid");
            userEmailValue.classList.remove("valid");
            userEmailValue.classList.remove("invalid");
            userPasswordValue.classList.remove("valid");
            userPasswordValue.classList.remove("invalid");
            invalidData1.style.display = "none";
            invalidData2.style.display = "none";
            invalidData3.style.display = "none";
            console.log(LISTA_USUARIO);

        }
        

    }

    datoValido();

    function enterLogin(){
        alert("Registro Exitoso!")
    }

    console.log(usuario);
    /* validar si el input no es vacìo, enviar formulario */


    if((userNameValue.value !=="") && (userEmailValue.value !=="") && (userPasswordValue.value !=="")){
        console.log("nuevo registro")
        usuario.name = userNameValue.value;
        usuario.email = userEmailValue.value;
        usuario.password = userPasswordValue.value;
        usuario.gender = UsergenderSelect.value;
        LISTA_USUARIO.push(usuario);
        console.log(usuario, LISTA_USUARIO);
        borrarDatosInput();
    }

    else{
        datoInvalido();
    }
    
    sessionStorage.setItem('listaUsuarios',JSON.stringify(LISTA_USUARIO, 2));
    console.log(sessionStorage)

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
            sessionStorage.setItem('usuario',usuario);  /* ERROR AL VALIDAR USUARIO POR SCOPE , CREADO DENTRO DE UNA FUCION */
            console.log("Inicio exitoso");
            location.href ="../html/userLogged.html";
            
        }
        else if(person.email != loginName.value || person.password != loginPassword.value){
            console.log("Usuario o contraseña invàlido, intente de nuevo")
        }
        else{
            console.log("Usuario invàlido")
        }
    });
    // COMPARAR OBJETO NAME CON LOGIN NAME





}) 


/* GUARDAR LISTA EN SECTTION STORAGE*/



// localStorage.getItem('lista usuarios',JSON.parse(LISTA_USUARIO)); /* PARA COGER RICO*/

let loginBox = document.getElementById("login-section");

function clickLogin(){ 

    if(loginStyleCounter == 1){
        formBoxLogin.style.top = "85%";
    }
}


