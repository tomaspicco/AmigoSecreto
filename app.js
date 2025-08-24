let amigos = [];

function agregarAmigo() {
  let nombre = document.getElementById("amigo").value;
  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
  } else {
    amigos.push(nombre);
    document.getElementById("amigo").value = "";
    actualizarLista();
  }
}

function actualizarLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  for (let i = 0; i < amigos.length; i++) {
    let li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

function sortearAmigo() {
  if (amigos.length == 0) {
    alert("No hay amigos para sortear.");
  } else {
    let indice = Math.floor(Math.random() * amigos.length);
    let sorteado = document.getElementById("resultado");
    sorteado.innerHTML = amigos[indice];
  }
}
