// script.ts

window.onload = () => {
    const contactButton = document.getElementById('contact-button') as HTMLButtonElement;

    contactButton.addEventListener('click', () => {
        alert("Thank you for reaching out! I'll get back to you soon.");
    });
};
