function range(end) {//Função para ir do 0 até o número x
  listaNumerica = []
  contadorLista = 0
  for(i = 0; i != end+1; i++) {
    listaNumerica.push(i)
    contadorLista++
    if (divisivelPor9 % 9 == 0) {

    }
  }
  console.log(listaNumerica)
}

const arr = [1567];
const divisivelPor9 = (accumulator, curr) => accumulator + curr;
if (divisivelPor9 % 9 == 0) {
  console.log(arr.reduce(divisivelPor9));
}