const API_URL = "http://localhost:8000/api/users";

async function apiCreateUser(newUser) {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUser)
        });
        return response.ok; // Retorna true se deu certo, false se falhou
    } catch (error) {
        console.error("Erro no POST:", error);
        return false;
    }
}