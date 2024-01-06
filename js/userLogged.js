// let lista_usuarios = sessionStorage.getItem("listaUsuarios");

// lista_usuarios = JSON.parse(lista_usuarios);

// console.log(lista_usuarios);

//

function genderFunction() {
  let usuario = sessionStorage.getItem("usuario");
  usuario = JSON.parse(usuario);
  console.log(usuario.name);

  let saludoHola = document.getElementById("saludoTittle");

  console.log(saludoHola);

  if (usuario.gender == "female") {
    document.body.style.backgroundColor = "red";
    saludoHola.innerText += " " + usuario.name;
  } else if (usuario.gender == "male") {
    document.body.style.backgroundColor = "blue";
    saludoHola.innerText += " " + usuario.name;
  } else if ((usuario.gender = "other")) {
    document.body.style.backgroundColor = "gray";
    saludoHola.innerText += " " + usuario.name;
  }
}

genderFunction();
