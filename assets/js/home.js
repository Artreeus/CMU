document.addEventListener('DOMContentLoaded', function() {
    var newsCarousel = new bootstrap.Carousel(document.getElementById('newsCarousel'), {
        interval: 5000,
        wrap: true
    });
    
    // Pause carousel on hover
    const carouselElement = document.getElementById('newsCarousel');
    carouselElement.addEventListener('mouseenter', function() {
        newsCarousel.pause();
    });
    carouselElement.addEventListener('mouseleave', function() {
        newsCarousel.cycle();
    });
});

// event js 

document.addEventListener('DOMContentLoaded', function() {
    // Notices scrolling functionality
    const noticesContainer = document.getElementById('noticesContainer');
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');
    
    // Scroll amount for each click
    const scrollAmount = 100;
    
    nextBtn.addEventListener('click', function() {
        noticesContainer.scrollBy({
            top: scrollAmount,
            behavior: 'smooth'
        });
    });
    
    prevBtn.addEventListener('click', function() {
        noticesContainer.scrollBy({
            top: -scrollAmount,
            behavior: 'smooth'
        });
    });
    
    // Hover effects for event cards
    const eventCards = document.querySelectorAll('.event-card');
    eventCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});


// resource js 

document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects for links
    const links = document.querySelectorAll('.du-resources-link');
    links.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.color = '#ffb400';
            this.querySelector('.du-resources-link-icon').style.color = '#ffb400';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.color = '#444';
            this.querySelector('.du-resources-link-icon').style.color = '#0074d9';
        });
    });
});

$(document).ready(function() {
    // Define a consistent slide duration (2000ms minimum)
    const slideDuration = 2000;
    
    // Initialize the carousel with consistent timing
    var owl = $(".home-sliders.home2").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: slideDuration,
        autoplayHoverPause: true,
        nav: true,
        dots: true,
        smartSpeed: 500,  // Transition speed (not duration)
        autoplaySpeed: slideDuration,  // Make sure transition is consistent
        responsive: {
            0: {
                items: 1,
                autoplay: true,
                autoplayTimeout: slideDuration
            },
            576: {
                items: 1,
                autoplay: true,
                autoplayTimeout: slideDuration
            },
            768: {
                items: 1,
                autoplay: true,
                autoplayTimeout: slideDuration
            },
            992: {
                items: 1,
                autoplay: true,
                autoplayTimeout: slideDuration
            },
            1200: {
                items: 1,
                autoplay: true,
                autoplayTimeout: slideDuration
            }
        }
    });
    
    // Ensure consistent autoplay timing
    owl.trigger('play.owl.autoplay', [slideDuration]);
    
    // Disable and completely remove any potential competing timing mechanisms
    owl.on('changed.owl.carousel', function(event) {
        // Reset timing on each slide change to ensure consistency
        owl.trigger('stop.owl.autoplay');
        owl.trigger('play.owl.autoplay', [slideDuration]);
    });
    
    // Remove the setInterval check that might be competing with the main timer
    // Instead, just ensure proper initialization once
    $(window).on('resize', function() {
        setTimeout(function() {
            owl.trigger('refresh.owl.carousel');
            owl.trigger('play.owl.autoplay', [slideDuration]);
        }, 200);
    });
});