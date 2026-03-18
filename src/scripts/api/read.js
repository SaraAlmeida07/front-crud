
// Função pura que busca os dados na API e os retorna
async function apiGetUsers() {
    try {
        // Envia a requisição GET 
        const response = await fetch(API_URL);


        if (!response.ok) {
            console.error("Erro do servidor ao buscar usuários. Status:", response.status);
            return [];
        }
        const data = await response.json();
        return data.users;

    } catch (error) {

        console.error("Erro de rede ao buscar usuários:", error.message);
        return [];
    }
}