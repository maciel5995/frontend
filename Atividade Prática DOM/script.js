let contador = 0;

const aumentarContador = () => {
    contador++;
    document.getElementById("contador").textContent = contador;
}

const diminuirContador = () => {
    contador--;
    if(contador < 0) contador = 0;
    document.getElementById("contador").textContent = contador;
}

