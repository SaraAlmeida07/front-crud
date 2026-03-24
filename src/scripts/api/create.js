

async function apiCreateUser(newUser) {
    try {
        await axios.post(API_URL, newUser);
        return true;
    } catch (error) {
        const errorMessage = error.response ? error.response.data : error.message;
        console.error("Erro no POST:", errorMessage);
        return false;
    }
}