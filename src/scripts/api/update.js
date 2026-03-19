async function apiPutUser(id, usuarioCompleto) {
    try {
        await axios.put(`${API_URL}?id=${id}`, usuarioCompleto);
        return true;
    } catch (error) {
        console.error("Erro no PUT:", error.response ? error.response.data : error.message);
        return false;
    }
}

async function apiPatchUser(id, mudancas) {
    try {
        await axios.patch(`${API_URL}?id=${id}`, mudancas);
        return true;
    } catch (error) {
        console.error("Erro no PATCH:", error.response ? error.response.data : error.message);
        return false;
    }
}