// Variables
const letrasNumerosArray = 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,ñ,o,p,q,r,s,t,u,v,w,x,y,z,0,1,2,3,4,5,6,7,8,9';
const numeroInicial = 1;
const mapaDeEncriptado = contadorDeArrayCifrado(letrasNumerosArray, numeroInicial);
const mapaDeDesencriptado = invertirMapa(mapaDeEncriptado);

// Funciones
function textoUsuario() {
    return document.getElementById('textoUsuario').value;
}
function textoDeSalida(texto) {
    document.getElementById('textoDeSalida').value = texto;
}
function quitarEspacios(letrasNumeros) {
    return letrasNumeros.trim();
}
function contadorDeArrayCifrado(letrasNumeros, numeroInicial) {
    const letrasNumerosArray = letrasNumeros.split(',').map(quitarEspacios);
    const mapaDeValoresCifrados = {};

    let valorActual = numeroInicial;
    letrasNumerosArray.forEach(letraNumero => {
        mapaDeValoresCifrados[letraNumero] = valorActual.toString();
        valorActual++;
    });

    return mapaDeValoresCifrados;
}
function invertirMapa(map) {
    const mapaInvertido = {};
    for (const [clave, valor] of Object.entries(map)) {
        mapaInvertido[valor] = clave;
    }
    return mapaInvertido;
}
function encriptar() {
    const texto = textoUsuario().toLowerCase();
    let resultadoDeEncriptado = '';

    for (let caracter of texto) {
        if (mapaDeEncriptado[caracter]) {
            resultadoDeEncriptado += mapaDeEncriptado[caracter] + ' ';
        } else if (caracter === ' ') {
            resultadoDeEncriptado += ' ';
        } else {
            resultadoDeEncriptado += caracter;
        }
    }
    textoDeSalida(resultadoDeEncriptado.trim());
}
function desencriptar() {
    const texto = textoUsuario();
    let resultadoDeDesencriptado = '';
    let palabraActual = '';

    for (let caracter of texto) {
        if (caracter === ' ') {
            resultadoDeDesencriptado += desencriptadorDePalabras(palabraActual, mapaDeDesencriptado) + ' ';
            palabraActual = '';
        } else {
            palabraActual += caracter;
        }
    }
    resultadoDeDesencriptado += desencriptadorDePalabras(palabraActual, mapaDeDesencriptado);
    textoDeSalida(resultadoDeDesencriptado.trim());
}
function desencriptadorDePalabras(palabra, map) {
    let palabraDesencriptada = '';
    const palabrasEncriptadas = palabra.split(' ');

    palabrasEncriptadas.forEach((palabraEncriptada) => {
        if (map[palabraEncriptada]) {
            palabraDesencriptada += map[palabraEncriptada];
        } else {
            palabraDesencriptada += palabraEncriptada;
        }
    });
    return palabraDesencriptada;
}
