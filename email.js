(function() {
    emailjs.init("service_dt0kttw"); // Substitua pelo seu User ID do EmailJS
})();

function enviarEmail(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const descricao = document.getElementById("descricao").value;

    // Parâmetros que vão para o EmailJS
    const params = {
        from_name: nome,
        from_email: email,
        message: descricao
    };

    emailjs.send("service_dt0kttw", "template_h5nzc8q", params)
        .then(function(response) {
            alert("E-mail enviado com sucesso!");
        }, function(error) {
            console.error("Erro ao enviar o e-mail: ", error);
            alert("Falha ao enviar o e-mail. Verifique o console para mais detalhes.");
        });
}
