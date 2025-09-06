 document.querySelectorAll('nav a').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
      });
    }); 

    var typed =new Typed('#element', {
      strings:['Freelancing.' , 'Web Developer!.'],
      typeSpeed :50,
    });