let amigos = [];

function adicionarAmigo()
{
    let amigo = document.querySelector("input");

    if(amigo.value !== "")
    {
        amigos.push(amigo.value);
        amigo.value = "";
        atualizarLista();
    }else
    {
        alert("Por favor, insira um nome!");
    }
}
function atualizarLista()
{
    let list = document.getElementById("listaAmigos");

    list.innerHTML = "";

    for (let i = 0; i < amigos.length; i++)
    {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        list.appendChild(li);
    }
}
function sortearAmigo()
{
    if(amigos.length > 0)
    {
        let indice = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indice];
        document.getElementById("resultado").innerHTML = `O amigo sorteado é: ${amigoSorteado}!`;
    }
}