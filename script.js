document.addEventListener("DOMContentLoaded", function () {
    // resgata o formulário e a div com a mensagem de sucesso
    const form = document.querySelector(".form-contato");
    const mensagemSucesso = document.getElementById("msg-sucesso");

    // simula o envio do formulário
    form.addEventListener("submit", function (e) {
        // impede o envio real do formulário
        e.preventDefault();

        // resgata o valor do campo nome e remove os espaços em branco
        const nome = document.getElementById("nome").value.trim();

        // monta a mensagem de sucesso
        const msg = "Mensagem enviada com sucesso!\nObrigado pelo contato, " + nome + "!";

        // adiciona a mesnagem de sucesso na div
        mensagemSucesso.innerText = msg;

        // exibe a mensagem de sucesso adicionando o display block
        mensagemSucesso.style.display = "block";

        // Limpa o formulário
        form.reset();

        // remove a mensagem após 7 segundos adicionando o display none
        setTimeout(() => {
            mensagemSucesso.style.display = "none";
        }, 7000);
    });
});
