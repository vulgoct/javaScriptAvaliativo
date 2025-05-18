function saveLocal () {
    let nome = document.getElementById('nome').value;
    localStorage.setItem('nome', nome);

}