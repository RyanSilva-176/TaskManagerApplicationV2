if (localStorage.getItem("token") == null){
  alert("Voce precisa estar logado para acessar esta pagina");
  window.location.href = "http://localhost:8080/";
}

let userLogado = JSON.parse(localStorage.getItem("userLogado"));

let logado = document.querySelector("#username");

if (userLogado.nome == ''){
     alert("Voce precisa estar logado para acessar esta pagina");
     window.location.href = "http://localhost:8080/";
}

logado.innerHTML = userLogado.nome;

function sair() {
  localStorage.removeItem("token");
  localStorage.removeItem("userLogado");
  window.location.href = "http://localhost:8080/";
}

function msgAlert() {
  let msgAlert = document.querySelector("#msg-alert");
  msgAlert.setAttribute("style", "visibility: visible");
}
