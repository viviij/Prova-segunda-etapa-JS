const nome = document.querySelector("#nomeGenerico");

function range(end) {
  listaNumerica = []

  for(i = 0; i != end; i++) {
    listaNumerica.push(i)
    console.log(listaNumerica)
  }
}
console.log(range())

nome.onclick = () => {
  alert(range())
}

