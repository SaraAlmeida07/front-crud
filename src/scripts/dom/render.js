// Função principal para desenhar os cards na tela
async function loadUsers() {
    // 1. Pede a lista de usuários para o mensageiro (função do read.js)
    const users = await apiGetUsers();


    const container = document.getElementById('users-container');
    container.innerHTML = '';


    users.forEach(user => {
        container.innerHTML += `
           <div class="col-12 col-md-4 col-lg-3 mb-3">
                
                <div class="card shadow-sm h-100 border-0 bg-white">
                    <div class="card-body d-flex flex-column">
                        
                        <h6 class="card-title text-truncate fw-bold mb-3" title="${user.name}">${user.name}</h6>
                        
                        <p class="card-text mb-1 text-secondary"><small>Age: ${user.age}</small></p>
                        <p class="card-text mb-4 text-truncate text-secondary" title="${user.email}"><small>${user.email}</small></p>
                        
                        <div class="d-flex gap-2 mt-auto">
                            <button class="btn btn-dark btn-sm flex-grow-1" onclick="prepararEdicao(${user.id}, '${user.name}', ${user.age}, '${user.email}')">Edit</button>
                            <button class="btn btn-outline-danger btn-sm flex-grow-1" onclick="deletarUsuario(${user.id})">Delete</button>
                        </div>
                        
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