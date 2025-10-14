const saida = document.getElementById("saida");

document.getElementById("get").addEventListener("click", async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const data = await res.json();
    saida.textContent = JSON.stringify(data, null, 2);
});

document.getElementById('post').addEventListener('click', async () => {
    const novoUsuario = { name: "aluno Senai", email: "teste@senai.com" };
    const res = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(novoUsuario)
    });
    const data = await res.json();
    saida.textContent = JSON.stringify(data, null, 2);
});