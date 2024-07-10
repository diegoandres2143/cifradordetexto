const alphabet = 'abcdefghijklmnñopqrstuvwxyz';
const reversedAlphabet = alphabet.split('').reverse().join('');

function encriptar() {
    const inputText = document.getElementById('textoUsuario').value.toLowerCase();
    let encryptedText = '';

    for (let char of inputText) {
        const index = alphabet.indexOf(char);
        if (index !== -1) {
            encryptedText += reversedAlphabet[index];
        } else {
            encryptedText += char; // mantiene el carácter si no está en el alfabeto (e.g., números, espacios, etc.)
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
