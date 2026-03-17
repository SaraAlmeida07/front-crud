async function deleteUser(id) {
    const confirmDelete = confirm("Are you sure you want to delete this user?");
    if (!confirmDelete) return;

    try {
        const response = await fetch(`${API_URL}?id=${id}`, {
            method: 'DELETE' // Define o método HTTP como DELETE para excluir um usuário//
        });

        if (response.ok) {
            loadUsers();
        } else {
            console.error('Failed to delete user');
        }
    } catch (error) {
        console.error("Erro de rede:", error.message);
    }
}   