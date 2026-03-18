// Variáveis de controle globais
let usuarioSendoEditadoId = null;
let dadosOriginais = null;

// ==========================================
// FUNÇÕES DISPARADAS PELOS BOTÕES DOS CARDS
// ==========================================

// Chamada quando clica em "Edit" no card
function prepararEdicao(id, name, age, email) {

    usuarioSendoEditadoId = id;
    dadosOriginais = { name, age: Number(age), email };

    // 2. Manda o DOM pintar a tela de edição
    renderizarModoEdicao(name, age, email);
}

// Chamada quando clica em "Cancel" no formulário
function cancelarEdicao() {
    // 1. Limpa a memória
    usuarioSendoEditadoId = null;
    dadosOriginais = null;

    // 2. Manda o DOM voltar a tela ao normal
    renderizarModoCriacao();
}

// Chamada quando clica em "Delete" no card
async function deletarUsuario(id) {
    const confirmacao = confirm("Are you sure you want to delete this user?");
    if (!confirmacao) return;

    // 1. Pede pra API deletar
    const sucesso = await deleteUser(id);

    // 2. Se a API conseguiu, manda o DOM desenhar a lista nova
    if (sucesso) {
        loadUsers();
    }
}


// ==========================================
// OUVINTE DO FORMULÁRIO (CREATE / UPDATE)
// ==========================================
document.getElementById('create-user-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const newName = document.getElementById('name').value;
    const newAge = document.getElementById('age').value;
    const newEmail = document.getElementById('email').value;

    //se não tem usuárioSendoEditadoId, chama o POST
    if (usuarioSendoEditadoId === null) {
        const newUser = { name: newName, age: Number(newAge), email: newEmail };
        const sucesso = await apiCreateUser(newUser); // api/create.js

        if (sucesso) {
            renderizarModoCriacao(); // Limpa form
            loadUsers(); // Recarrega cards
        }
    }


    else {
        const mudancas = {};
        let contadorDeMudancas = 0;

        if (newName !== dadosOriginais.name) { mudancas.name = newName; contadorDeMudancas++; }
        if (Number(newAge) !== dadosOriginais.age) { mudancas.age = Number(newAge); contadorDeMudancas++; }
        if (newEmail !== dadosOriginais.email) { mudancas.email = newEmail; contadorDeMudancas++; }

        if (contadorDeMudancas === 0) {
            alert("Nenhum dado foi alterado.");
            return;
        }

        let sucesso = false;

        if (contadorDeMudancas === 3) {
            // api/update.js (PUT)
            sucesso = await apiPutUser(usuarioSendoEditadoId, { name: newName, age: Number(newAge), email: newEmail });
        } else {
            // api/update.js (PATCH)
            sucesso = await apiPatchUser(usuarioSendoEditadoId, mudancas);
        }

        if (sucesso) {
            cancelarEdicao(); // Limpa as variáveis e o form
            loadUsers(); // Recarrega cards
        }
    }
});

// Assim que o app.js carrega (quando a página abre), ele manda desenhar os usuários!
loadUsers();