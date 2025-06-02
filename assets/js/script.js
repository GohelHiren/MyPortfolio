// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// navbar toggle
$('#nav-toggle').click(function () {
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});





// whatsapp contact form
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var name = document.getElementById('whatsappName').value.trim();
    var email = document.getElementById('whatsappEmail').value.trim();
    var message = document.getElementById('whatsappMessage').value.trim();
    var whatsappNumber = "919327156147";
    var text = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    var url = `https://wa.me/${whatsappNumber}?text=${text}`;
    window.open(url, '_blank');
});



// typed text effect
const words = ["Web Designer", "Web Developer"];
let wordIndex = 0;
let charIndex = 0;
let typing = true;
const typedText = document.getElementById("typed-text");

function typeEffect() {
    if (typing) {
        if (charIndex < words[wordIndex].length) {
            typedText.textContent += words[wordIndex][charIndex];
            charIndex++;
            setTimeout(typeEffect, 100);
        } else {
            typing = false;
            setTimeout(typeEffect, 1000);
        }
    } else {
        if (charIndex > 0) {
            typedText.textContent = words[wordIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(typeEffect, 50);
        } else {
            typing = true;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(typeEffect, 400);
        }
    }
}
typeEffect();
