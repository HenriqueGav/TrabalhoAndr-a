document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    
    if(name && email) {
        document.getElementById("message").textContent = "Obrigado, " + name + "! Seu contato foi enviado.";
        document.getElementById("contact-form").reset();
    } else {
        document.getElementById("message").textContent = "Por favor, preencha todos os campos.";
    }
});
