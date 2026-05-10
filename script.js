ScrollReveal({
  reset: true,
  distance: '35px',
  duration: 2000,
  delay: 200
});
ScrollReveal().reveal('.navs', {origin: 'top'});
ScrollReveal().reveal('.HOME', {origin: 'bottom'});
ScrollReveal().reveal('.ABOUT', {origin: 'bottom'});
ScrollReveal().reveal('.EDUCATION', {origin: 'bottom'});
ScrollReveal().reveal('.PROJECT', {origin: 'bottom'});
ScrollReveal().reveal('.CONTACT', {origin: 'bottom'});
ScrollReveal().reveal('.Container', {origin: 'bottom'});



const sr = ScrollReveal({
    distance: '60px',
    duration: 2000,
    delay: 200,
    reset: false
});


sr.reveal('.left', {
    origin: 'left'
});

sr.reveal('.profile', {
    origin: 'top',
    delay: 400,
    scale: 0.8
});

sr.reveal('.right', {
    origin: 'right',
    delay: 600
});

// Content sections
sr.reveal('.grid', {
    origin: 'bottom',
    interval: 200
});

// Section titles
sr.reveal('h3', {
    origin: 'left',
    interval: 100
});

// Go Back button
sr.reveal('.back', {
    origin: 'bottom',
    delay: 300
});

// Contact form - send message to your Gmail
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get values
    const name = contactForm.name.value;
    const email = contactForm.email.value;
    const message = contactForm.message.value;

    // Create Gmail mailto link
    const subject = encodeURIComponent("Portfolio Contact from " + name);
    const body = encodeURIComponent(
        "Name: " + name + "\n" +
        "Email: " + email + "\n\n" +
        "Message:\n" + message
    );

    // Open user's email app and send to your Gmail
    window.location.href =
        "mailto:minguitorenz71@gmail.com?subject=" +
        subject +
        "&body=" +
        body;

    // Reset form after opening email app
    contactForm.reset();
});
