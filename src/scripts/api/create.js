const API_URL = "http://localhost:8000/api/users";

async function apiCreateUser(newUser) {
    try {
        await axios.post(API_URL, newUser);
        return true;
    } catch (error) {
        console.error("Erro no POST:", error);
        return false;
    }
}