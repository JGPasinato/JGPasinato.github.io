// Smooth scroll para links de navegação
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os links da navegação
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Previne o comportamento padrão do link
            
            // Pega o ID da seção alvo
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Calcula a posição da seção
                const offsetTop = targetSection.offsetTop;
                
                // Faz o scroll suave até a seção
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});