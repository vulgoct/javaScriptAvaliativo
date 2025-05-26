function validarCampos(nome, telefone1, telefone2){
    if(!nome.trim()){
        alert("Os campos não podem estar vazios")
        return false;
    }
    if (!telefone1.trim() || telefone1.length <8){
        alert("O telefone principal deve conter pelo menos 8 digitos.");
        return false;
    }

    if (telefone2 && telefone2.length <8){
        alert("O telefone secundario deve conter pelo menos 8 digitos ou o campo deve ser deixado em branco");
        return false;
    }
    return true;
}

function adicionar (){
    const nome = document.getElementById('input_name').value;
    const telefone1 = document.getElementById('input_number1').value;
    const telefone2 = document.getElementById('input_number2').value;

    if(!validarCampos(nome, telefone1, telefone2)) return;

    const contato = {
        nome,
        telefone1,
        telefone2,
    };

    let lista = JSON.parse(localStorage.getItem('contatos')) || [];
    lista.push(contato);
    localStorage.setItem('contatos', JSON.stringify(lista));

    alert("Contato adicionado com sucesso!");
    limparCampos();
    mostrarLista();
}

function mostrarLista() {
    const listaContainer = document.getElementById('lista_contatos');
    if (!listaContainer) return;

    const lista = JSON.parse(localStorage.getItem('contatos')) || [];
    listaContainer.innerHTML = "";

    lista.forEach((contato, index) => {
        const div = document.createElement('div');
        div.className = "contato";
        div.innerHTML = `
            <strong>${contato.nome}</strong><br/>
            ${contato.telefone1}${contato.telefone2 ? " | " + contato.telefone2 : ""}
            <button onclick="remover(${index})">Remover</button>
        `;
        listaContainer.appendChild(div);
    });
}

function remover(index) {
    let lista = JSON.parse(localStorage.getItem('contatos')) || [];
    lista.splice(index, 1);
    localStorage.setItem('contatos', JSON.stringify(lista));
    mostrarLista();
}
function limparCampos () {
    document.getElementById('input_name').value = "";
    document.getElementById('input_number1').value = "";
    document.getElementById('input_number2').value = "";
}

window.onload = mostrarLista;

