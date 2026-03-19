
// Função pura que busca os dados na API e os retorna
async function apiGetUsers() {
    try {
        // Envia a requisição GET 
        const response = await axios.get(API_URL);


        const data = response.data;
        return data.users;

    } catch (error) {

        console.error("Erro de rede ao buscar usuários:", error.message);
        return [];
    }
}