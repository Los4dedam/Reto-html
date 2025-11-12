document.addEventListener('DOMContentLoaded', function () {

    const navLinks = document.querySelectorAll('.nav-principal ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            
          


            navLinks.forEach(item => {
                item.classList.remove('activo');
            });


            this.classList.add('activo');

        });
    });
});
