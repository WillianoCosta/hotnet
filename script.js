document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling para links de navegação
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            
            // Fechar o menu mobile após clicar em um link
            const navMenu = document.querySelector('header nav');
            const menuToggle = document.querySelector('.menu-toggle');
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    });

    // Toggle para o menu de navegação em dispositivos móveis
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('header nav');

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Validação e envio do formulário de contato (exemplo)
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Impede o envio padrão do formulário

            // Simula o envio do formulário
            // Em um ambiente real, você enviaria esses dados para um servidor (via Fetch API ou XMLHttpRequest)
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Validação simples
            if (name === '' || email === '' || message === '') {
                displayMessage('Por favor, preencha todos os campos obrigatórios.', 'error');
                return;
            }

            // Simula um atraso de rede
            setTimeout(() => {
                // Aqui você faria uma requisição AJAX para um endpoint do seu servidor
                // Exemplo: fetch('/send-email', { method: 'POST', body: JSON.stringify({ name, email, phone, message }) })
                // .then(response => response.json())
                // .then(data => { ... })
                // .catch(error => { ... });

                // Por enquanto, apenas exibe uma mensagem de sucesso
                displayMessage('Mensagem enviada com sucesso! Em breve entraremos em contato.', 'success');
                contactForm.reset(); // Limpa o formulário
            }, 1500);
        });
    }

    function displayMessage(msg, type) {
        formMessage.textContent = msg;
        formMessage.className = 'form-message ' + type; // Adiciona classe 'success' ou 'error'
        formMessage.style.display = 'block'; // Mostra a mensagem

        // Esconde a mensagem após alguns segundos
        setTimeout(() => {
            formMessage.style.display = 'none';
            formMessage.textContent = '';
            formMessage.className = 'form-message'; // Reseta as classes
        }, 5000);
    }
});