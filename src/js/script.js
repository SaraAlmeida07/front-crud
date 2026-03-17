const API_URL = "http://localhost:8000/api/users"; //link da Api//


//Função para buscar os usuários
async function loadUsers() {
    const response = await fetch(API_URL);
    const users = await response.json();

    


    console.log("Meus usuários chegaram da API:", users);

}
loadUsers();