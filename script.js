var typed = new Typed('#element', {
    strings: ['Web developer','CIT certified','MS word','MS excel','Graphic designer','Web developer'],
    typeSpeed: 50,
  });

  document.addEventListener('DOMContentLoaded', function() {
    const aboutLink = document.querySelector('a[href="#about"]');
    const aboutSection = document.getElementById('about');
    const projectsLink = document.querySelector('a[href="#projects"]');
    const projectsSection = document.getElementById('projects');
    const contactLink = document.querySelector('a[href="#contact"]');
    const contactSection = document.getElementById('contact');


    aboutLink.addEventListener('click', function(event) {
        event.preventDefault();
        aboutSection.classList.add('show');
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    });

    projectsLink.addEventListener('click', function(event) {
        event.preventDefault();
        projectsSection.classList.add('show');
        projectsSection.scrollIntoView({ behavior: 'smooth' });
    });

    contactLink.addEventListener('click', function(event) {
        event.preventDefault();
        contactSection.classList.add('show');
        contactSection.scrollIntoView({ behavior: 'smooth' });
    });
});

document.getElementById('linkedin-btn').addEventListener('click', function() {
  window.open('https://www.linkedin.com/in/saad-darbari-82664a2b3/', '_blank');
});

document.getElementById('downloadBtn').addEventListener('click', function() {
  window.location.href = 'SAAD DARBARI CV.pdf';
});




