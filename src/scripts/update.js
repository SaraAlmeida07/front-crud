async function editUser(id, currentName, currentAge, currentEmail) {
    const newName = prompt("Nome:", currentName);
    const newAge = prompt("Idade:", currentAge);
    const newEmail = prompt("Email:", currentEmail);

    if (newName === null || newAge === null || newEmail === null) return;

    const mudancas = {};
    let contadorDeMudancas = 0;

    if (newName !== currentName) {
        mudancas.name = newName;
        contadorDeMudancas++;
    }

    if (newAge !== currentAge) {
        mudancas.age = newAge;
        contadorDeMudancas++;
    }

    if (newEmail !== currentEmail) {
        mudancas.email = newEmail;
        contadorDeMudancas++;
    }

    if (contadorDeMudancas === 0) {
        alert("Nenhum dado foi alterado.");
        return;
    }

    if (contadorDeMudancas === 3) {
        console.log("Os 3 campos mudaram! Chamando PUT...");
        // O PUT precisa do objeto completo!
        const usuarioCompleto = { name: newName, age: Number(newAge), email: newEmail };
        await putUser(id, usuarioCompleto);
    } else {
        console.log(`Apenas ${contadorDeMudancas} campo(s) mudaram! Chamando PATCH...`);
        // O PATCH recebe apenas o objeto "mudancas" que montamos lá em cima
        await patchUser(id, mudancas);
    }

    async function putUser(id, usuarioCompleto) {
        try {
            const response = await fetch(`${API_URL}?id=${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(usuarioCompleto)
            });

            if (response.ok) {
                loadUsers();
            } else {
                console.error('Failed to update user with PUT');
            }
        } catch (error) {
            console.error("Erro de rede no PUT:", error.message);
        }
    }

    async function patchUser(id, mudancas) {
        try {
            const response = await fetch(`${API_URL}?id=${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(mudancas)
            });

            if (response.ok) {
                loadUsers();
            } else {
                console.error('Failed to update user with PATCH');
            }
        } catch (error) {
            console.error("Erro de rede no PATCH:", error.message);
        }
    }
}
