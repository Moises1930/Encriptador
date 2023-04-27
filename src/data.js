const vowelMap = new Map([
    ['e', 'enter'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['o', 'ober'],
    ['u', 'ufat']
]);

export const encriptar = texto => {
    if(typeof texto !== 'string'){
        throw new Error('Debe ser un Texto');
    }
    for (const [char, replacement] of vowelMap) {
        const vowelRegex = new RegExp(char, 'g');
        texto = texto.replace(vowelRegex, replacement);
    }
    return texto;
}

export const desencriptar = texto => {
    if(typeof texto !== 'string'){
        throw new Error('Debe ser un Texto');
    }
    for (const [char, replacement] of vowelMap) {
        const regex = new RegExp(replacement, 'g');
        texto = texto.replace(regex, char);
    }
    return texto;
}