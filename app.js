// Lista para armazenar os nomes dos amigos
let listaAmigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();

    // Validação: campo não pode estar vazio
    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    // Adiciona o nome à lista e exibe na tela
    listaAmigos.push(nome);
    atualizarLista();

    // Limpa o campo de entrada
    input.value = "";
    input.focus();
}

// Função para atualizar a exibição da lista de amigos
function atualizarLista() {
    let listaElement = document.getElementById("listaAmigos");
    listaElement.innerHTML = ""; // Limpa a lista antes de atualizar

    listaAmigos.forEach((amigo, index) => {
        let item = document.createElement("li");
        item.textContent = amigo;

        // Botão para remover um nome da lista
        let botaoRemover = document.createElement("button");
        botaoRemover.textContent = "❌";
        botaoRemover.style.marginLeft = "10px";
        botaoRemover.onclick = function () {
            removerAmigo(index);
        };

        item.appendChild(botaoRemover);
        listaElement.appendChild(item);
    });
}

// Função para remover um amigo da lista
function removerAmigo(index) {
    listaAmigos.splice(index, 1);
    atualizarLista();
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    // Validação: é necessário pelo menos 2 nomes para o sorteio
    if (listaAmigos.length < 2) {
        alert("Adicione pelo menos dois amigos para realizar o sorteio.");
        return;
    }

    let sorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];

    // Exibe o resultado na tela
    let resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = `<li>🎉 O amigo secreto é: <strong>${sorteado}</strong> 🎉</li>`;
}

