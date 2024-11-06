// Seleciona os elementos necessários
const mobileMenu = document.getElementById('mobile-menu');
const navUl = document.querySelector('nav ul');
const contactForm = document.getElementById('contact-form');

// Função para abrir/fechar o menu responsivo
mobileMenu.addEventListener('click', () => {
    navUl.classList.toggle('show');
});

// Validação do formulário de contato
contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita o envio padrão do formulário

    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    // Verifica se todos os campos estão preenchidos
    if (name === '' || email === '' || message === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Exibe uma mensagem de sucesso (aqui você pode adicionar a lógica de envio)
    alert('Mensagem enviada com sucesso!');
    
    // Limpa os campos do formulário após o envio
    contactForm.reset();
});

// Animações simples
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Exemplo de animação: muda a opacidade do header ao rolar a página
    const header = document.querySelector('header');
    header.style.opacity = Math.max(0, 1 - scrollY / 300);
});
