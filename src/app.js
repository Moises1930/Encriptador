import {soloMinus, input, pegar, btnEncriptar, btnDesencriptar, rectangulo} from './dom/letFun.js'
import {en, des, copy} from './dom/control.js';

input.onpaste = pegar;
input.onbeforeinput = soloMinus;

btnEncriptar.onclick = en;
btnDesencriptar.onclick = des;
rectangulo.onclick = copy;