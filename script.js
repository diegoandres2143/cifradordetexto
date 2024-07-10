function encrypt() {
    const inputText = document.getElementById('inputText').value;
    const outputText = document.getElementById('outputText');
    
    // Convertir texto a minúsculas para facilitar el manejo
    const lowercaseText = inputText.toLowerCase();

    // Mapa de cifrado según las reglas dadas
    const encryptionMap = {
        'a': '21', 'b': '20', 'c': '19', 'd': '18', 'e': '17',
        'f': '16', 'g': '15', 'h': '14', 'i': '13', 'j': '12',
        'k': '11', 'l': '10', 'm': '9', 'n': '8', 'o': '7',
        'p': '6', 'q': '5', 'r': '4', 's': '3', 't': '2',
        'u': '1', 'v': 'XXI', 'w': 'XX', 'x': 'XIX', 'y': 'XVIII', 'z': 'XVII',
        '0': 'N', '1': 'I', '2': 'II', '3': 'III', '4': 'IV',
        '5': 'V', '6': 'VI', '7': 'VII', '8': 'VIII', '9': 'IX'
    };

    let result = '';

    for (let char of lowercaseText) {
        if (encryptionMap[char]) {
            result += encryptionMap[char] + ' ';
        } else if (char === ' ') {
            result += ' ';
        } else {
            // Si el carácter no está en el mapa (p. ej. signos de puntuación), lo dejamos sin cifrar
            result += char;
        }
    }

    outputText.value = result.trim();
}

function decrypt() {
    const inputText = document.getElementById('inputText').value;
    const outputText = document.getElementById('outputText');

    // Mapa de descifrado según las reglas dadas (inverso del mapa de cifrado)
    const decryptionMap = {
        '21': 'a', '20': 'b', '19': 'c', '18': 'd', '17': 'e',
        '16': 'f', '15': 'g', '14': 'h', '13': 'i', '12': 'j',
        '11': 'k', '10': 'l', '9': 'm', '8': 'n', '7': 'o',
        '6': 'p', '5': 'q', '4': 'r', '3': 's', '2': 't',
        '1': 'u', 'XXI': 'v', 'XX': 'w', 'XIX': 'x', 'XVIII': 'y', 'XVII': 'z',
        'N': '0', 'I': '1', 'II': '2', 'III': '3', 'IV': '4',
        'V': '5', 'VI': '6', 'VII': '7', 'VIII': '8', 'IX': '9'
    };

    let result = '';
    let currentWord = '';

    for (let char of inputText) {
        if (char === ' ') {
            // Procesar y añadir la palabra actual cifrada/descifrada al resultado
            result += decryptWord(currentWord, decryptionMap) + ' ';
            currentWord = ''; // Reiniciar la palabra actual para la siguiente
        } else {
            currentWord += char;
        }
    }

    // Añadir la última palabra cifrada/descifrada al resultado
    result += decryptWord(currentWord, decryptionMap);

    outputText.value = result;
}

function decryptWord(word, decryptionMap) {
    let decryptedWord = '';

    // Dividir la palabra cifrada en partes y procesar cada parte
    const parts = word.trim().split(' ');
    for (let part of parts) {
        if (part in decryptionMap) {
            decryptedWord += decryptionMap[part];
        } else {
            // Si no está en el mapa de descifrado (p. ej. espacios), mantenerlo como está
            decryptedWord += part;
        }
    }

    return decryptedWord;
}
