import {desencriptar, encriptar} from '../data.js';
import {input, rectangulo, list, item} from './letFun.js'

const limpiar = () => {
    rectangulo.querySelector('img').remove();
    list.removeChild(item);
    rectangulo.querySelector('label').style.visibility = 'visible';
}
const formato = () => {
    list.querySelector('li').style.fontWeight = 'normal';
    list.querySelector('li').style.textAlign = 'start';
    list.style.height = '90%';
    rectangulo.style.cursor = 'pointer';
    input.value = '';
}
export const en  = () => {
    if(input.value != ''){
        if (rectangulo.querySelector('img')) {
            limpiar();
        }
        list.querySelector('li').textContent = encriptar(input.value);
        formato();
    }
}
export const des = () => {
    if(input.value != ''){
        if (rectangulo.querySelector('img')) {
            limpiar();
        }
        list.querySelector('li').textContent = desencriptar(input.value);
        formato();
    }
}
const mostrarAlerta = () => {
    const modal = document.getElementById('miModal');
    const mensaje = document.getElementById('mensaje');
    mensaje.innerHTML = '¡Copiado!';
    modal.style.display = 'block';
    const btnCerrar = document.getElementsByClassName('cerrar')[0];
    btnCerrar.onclick = () => {
        modal.style.display = 'none';
    };
    modal.onclick =() => {
        modal.style.display = 'none';    }
}
export const copy = event => {
    if(!rectangulo.querySelector('img')){
        navigator.clipboard.writeText(list.querySelector('li').textContent);
        mostrarAlerta();
    }
}