function mostrarDetalhes(id) {
    const elemento = document.getElementById(`detalhe-${id}`);
    
    if (elemento.classList.contains('escondido')) {
        elemento.classList.remove('escondido');
    } else {
        elemento.classList.add('escondido');
    }
}
