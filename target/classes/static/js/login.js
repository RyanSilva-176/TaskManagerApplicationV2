let btn = document.querySelector(".fa-eye");

btn.addEventListener("click", () => {
  let inputSenha = document.querySelector("#senha");

  if (inputSenha.getAttribute("type") == "password") {
    inputSenha.setAttribute("type", "text");
  } else {
    inputSenha.setAttribute("type", "password");
  }
});

function entrar() {
  let usuario = document.querySelector("#usuario");
  let userLabel = document.querySelector("#userLabel");

  let senha = document.querySelector("#senha");
  let senhaLabel = document.querySelector("#senhaLabel");

  let msgError = document.querySelector("#msgError");

  let listaUser = [];

  let userValid = {
    nome: "",
    user: "",
    senha: "",
  };

  listaUser = JSON.parse(localStorage.getItem("listaUser"));

  listaUser.forEach((item) => {
    if (usuario.value == item.userCad && senha.value == item.senhaCad) {
      userValid = {
        nome: item.nomeCad,
        user: item.userCad,
        senha: item.senhaCad,
      };
    }
  });

  if(usuario.value == '' || senha.value == ''){
      userLabel.setAttribute("style", "color: red");
      usuario.setAttribute("style", "border-color: red");
      senhaLabel.setAttribute("style", "color: red");
      senha.setAttribute("style", "border-color: red");
      msgError.setAttribute("style", "display: block");
      msgError.innerHTML = "Usuário ou senha vazio";
      usuario.focus();
  }
  else if (usuario.value == userValid.user && senha.value == userValid.senha) {
    let token =
      Math.random().toString(16).substring(2) +
      Math.random().toString(16).substring(2);

    localStorage.setItem("token", token);
    localStorage.setItem("userLogado", JSON.stringify(userValid));

    window.location.href = "http://localhost:8080/list";
  }else {
    userLabel.setAttribute("style", "color: red");
    usuario.setAttribute("style", "border-color: red");
    senhaLabel.setAttribute("style", "color: red");
    senha.setAttribute("style", "border-color: red");
    msgError.setAttribute("style", "display: block");
    msgError.innerHTML = "Usuário e senha incorretos";
    usuario.focus();
  }
}
