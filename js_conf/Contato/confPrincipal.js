function cont_caracter() {
    var element = document.getElementById('nome_problema_requerido').value.length;
    document.getElementById('contador_textarea').innerHTML = element + "/300 (max caracteres 300)"
}

cont_caracter()