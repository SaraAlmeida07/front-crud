// POST - Criar um novo usuário
const form = document.getElementById('create-user-form');

form.addEventListener('submit', async function (event) {
    event.preventDefault(); // Impede o comportamento padrão de envio do formulário//
    // Captura os valores dos campos do formulário
    const newUser = {
        name: document.getElementById('name').value,
        age: document.getElementById('age').value,
        email: document.getElementById('email').value
    };

    try {
        const response = await fetch(API_URL, {
            method: 'POST', // Define o método HTTP como POST para criar um novo usuário//
            headers: {
                'Content-Type': 'application/json' // Define o tipo de conteúdo como JSON//
            },
            body: JSON.stringify(newUser) // Converte o objeto newUser para uma string JSON//
        });

        if (response.ok) {
            form.reset();
            loadUsers();
        } else {
            console.error('Failed to create user');
        }
    } catch (error) {
        console.error("Erro de rede:", error.message);
    }
});