document.addEventListener("DOMContentLoaded", function() {
    const picElement = document.querySelector(".programmer");
    picElement.classList.add("animated");

    const textElement = document.querySelector(".web");
    textElement.classList.add("animated");

    const btnElement = document.querySelector(".btn");
    btnElement.classList.add("animated");
});

/////////////////////////////////////////////////////////////////////////////
// fade upward effect
document.addEventListener('DOMContentLoaded', function() {
    // Select all elements with the 'fade-slide' class
    const elements = document.querySelectorAll('.fade-slide');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-slide-in');
               
                observer.unobserve(entry.target);
            }
        });
    });

    
    elements.forEach(element => {
        observer.observe(element);
    });
});

/////////////////////////////////////////////////////////////////////////
function toggleReadMore() {
    const definition2 = document.querySelector('.definition2');
    const btn = document.querySelector('.rm_btn');

    if (definition2.classList.contains('show')) {
        definition2.classList.remove('show');
        btn.textContent = 'Read More';
        btn.classList.remove('moved'); 
    } else {
        definition2.classList.add('show');
        btn.textContent = 'See Less';
        btn.classList.add('moved'); 
    }
}

 ///////////////////////////////////////////////////////////////////////////////////////
 // slide up effect in importance 
 document.addEventListener('scroll', function() {
    const elementsToShow = document.querySelectorAll('.program, .gray');
    
    elementsToShow.forEach(function(element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        if (rect.top <= windowHeight - 100) { 
            element.classList.add('show');
        }
    });
});

//////////////////////////////////////////////////////////////////////////////
//active hyperlink
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');

    // Function to set the active link based on hash
    function setActiveLink() {
        const currentLocation = window.location.hash || '#home'; 
        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentLocation) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
    setActiveLink();
    window.addEventListener('hashchange', setActiveLink);

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            link.classList.add('active'); 
        });
    });
});
