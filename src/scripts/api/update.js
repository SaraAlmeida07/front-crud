async function apiPutUser(id, usuarioCompleto) {
    try {
        const response = await fetch(`${API_URL}?id=${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(usuarioCompleto)
        });
        return response.ok;
    } catch (error) {
        console.error("Erro no PUT:", error);
        return false;
    }
}

async function apiPatchUser(id, mudancas) {
    try {
        const response = await fetch(`${API_URL}?id=${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(mudancas)
        });
        return response.ok;
    } catch (error) {
        console.error("Erro no PATCH:", error);
        return false;
    }
}