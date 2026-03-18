// Função principal para desenhar os cards na tela
async function loadUsers() {
    // 1. Pede a lista de usuários para o mensageiro (função do read.js)
    const users = await apiGetUsers();


    const container = document.getElementById('users-container');
    container.innerHTML = '';


    users.forEach(user => {
        container.innerHTML += `
            <div class="col-md-6 mb-3">
                <div class="card">
                    <div class="card-body">
                        <h6 class="card-title">${user.name}</h6>
                        <p class="card-text mb-1"><small>Age: ${user.age}</small></p>
                        <p class="card-text mb-3"><small>Email: ${user.email}</small></p>
                        
                        <button class="btn btn-dark btn-sm" onclick="prepararEdicao(${user.id}, '${user.name}', ${user.age}, '${user.email}')">Edit</button>
                        <button class="btn btn-outline-danger btn-sm" onclick="deletarUsuario(${user.id})">Delete</button>
                    </div>
                </div>
            </div>
        `;
    });
}

// Muda apenas os visuais do formulário para o Modo Edição
function renderizarModoEdicao(name, age, email) {
    document.getElementById('name').value = name;
    document.getElementById('age').value = age;
    document.getElementById('email').value = email;

    document.getElementById('form-title').innerText = 'Edit User';
    document.getElementById('submit-btn').innerText = 'Update';
    document.getElementById('cancel-btn').style.display = 'block';
}

// Limpa o formulário e volta o visual para o Modo Criação
function renderizarModoCriacao() {
    document.getElementById('create-user-form').reset();
    document.getElementById('form-title').innerText = 'Create User';
    document.getElementById('submit-btn').innerText = 'Create';
    document.getElementById('cancel-btn').style.display = 'none';
}