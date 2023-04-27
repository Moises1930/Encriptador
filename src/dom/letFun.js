export const input = document.querySelector('textarea');
export const btnEncriptar = document.getElementById('btn-encriptar');
export const btnDesencriptar = document.getElementById('btn-desencriptar');
export const rectangulo = document.querySelector('section.rectangulo');
export const list = rectangulo.querySelector('ul');
export const item = list.querySelector('li');

export const pegar = event => {
    event.preventDefault();
    const text = event.clipboardData.getData('text/plain');
    const regex = /[^a-záéíóúüñ\s]/gi;
    const newText = quitarAcentos(text).toLowerCase().replace(regex, '');
    input.value += newText;
}
export const soloMinus = event => {
    const input = event.data;
    const regex = /[^a-z]/gi;
    if (input.match(regex) || input.toUpperCase() === input ) {
        event.preventDefault();
    }
}
export const quitarAcentos = texto => {
    const newTexto = texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-záéíóúüñ\s]/gi, '');
    return newTexto;
}