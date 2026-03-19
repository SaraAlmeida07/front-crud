async function deleteUser(id) {

    try {
        await axios.delete(`${API_URL}?id=${id}`);
        return true;

    } catch (error) {
        console.error("Erro de rede:", error.response ? error.response.data : error.message);
        return false;
    }
}   