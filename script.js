const alfabeto = 'abcdefghijklmnñopqrstuvwxyz';
const alfabetoAlReveshabet = alfabeto.split('').reverse().join('');
const numeros = '0123456789';
const numerosAlReves = numeros.split('').reverse().join('');

function encriptar() {
    const inputText = document.getElementById('textoUsuario').value.toLowerCase();
    let encryptedText = '';

    for (let caracter of inputText) {
        if (alfabeto.includes(caracter)) {
            const index = alfabeto.indexOf(caracter);
            encryptedText += alfabetoAlReveshabet[index];
        } else if (numeros.includes(caracter)) {
            const index = numeros.indexOf(caracter);
            encryptedText += numerosAlReves[index];
        } else {
            encryptedText += caracter;
        }
    }

    document.getElementById('textoDeSalida').value = encryptedText;
}

document.getElementById('copiarBtn').addEventListener('click', async function() {
    const textoCifrado = document.getElementById('textoDeSalida').value;
    
    try {
        await navigator.clipboard.writeText(textoCifrado);
        document.getElementById('textoDeSalida').value = '';
        document.getElementById('textoDeSalida').placeholder = 'Texto copiado al portapapeles';
    } catch (err) {
        console.error('Error al intentar copiar el texto: ', err);
        alert('No se pudo copiar el texto al portapapeles.');
    }
});
