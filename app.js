const accordion = document.querySelectorAll('.content-container');

for ( i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function() {
        this.classList.toggle('active');
    })
};

// We can also use the forEach method

// accordion.forEach(e => {
//     e.addEventListener('click', () => {
//         e.classList.toggle('active');
//     })
// })

// or

// accordion.forEach(e => {
//     e.addEventListener('click', function () {
//         this.classList.toggle('active');
//     })
// })