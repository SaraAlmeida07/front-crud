const API_URL = "http://localhost:8000/api/users"; //link da Api//


//Função para buscar os usuários
async function loadUsers() {
    const response = await fetch(API_URL);
    const data = await response.json();

    const container = document.getElementById('users-container');
    container.innerHTML = ''; //Limpa a tela antes de adicionar os usuários//

    const listaDeUsuarios = data.users; //Acessa a lista de usuários retornada pela API//

    listaDeUsuarios.forEach((user, index) => {
        container.innerHTML += `
            <div class="col-md-6 mb-3">
                <div class="card">
                    <div class="card-body">
                        <h6 class="card-title">${user.name}</h6>
                        <p class="card-text mb-1"><small>Age: ${user.age}</small></p>
                        <p class="card-text mb-3"><small>Email: ${user.email}</small></p>
                        <button class="btn btn-outline-secondary btn-sm" onclick="prepararEdicao(${user.id}, '${user.name}', ${user.age}, '${user.email}')">Edit</button>
                        <button class="btn btn-outline-danger btn-sm" onclick="deleteUser(${user.id})">Delete</button>
                    </div>
                </div>
            </div>
        `;
    });

}
loadUsers();
