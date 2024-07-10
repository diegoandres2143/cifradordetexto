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

function desencriptar() {
    const inputText = document.getElementById('textoDeSalida').value.toLowerCase();
    let decryptedText = '';

    for (let char of inputText) {
        const index = reversedAlphabet.indexOf(char);
        if (index !== -1) {
            decryptedText += alphabet[index];
        } else {
            decryptedText += char; // mantiene el carácter si no está en el alfabeto (e.g., números, espacios, etc.)
        }
    }

    document.getElementById('textoUsuario').value = decryptedText;
}
