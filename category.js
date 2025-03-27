document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('carouselContainer');
    const track = document.getElementById('carouselTrack');
    let paused = false;
    const speed = 2; // adjust this value for faster/slower scrolling
  
    // Duplicate the carousel content for a seamless loop
    track.innerHTML += track.innerHTML;
  
    // Add event listeners to pause auto scroll when mouse hovers over a card
    const cards = document.querySelectorAll('.carousel-card');
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => { paused = true; });
      card.addEventListener('mouseleave', () => { paused = false; });
    });
  
    // Auto-scroll function using requestAnimationFrame for smoothness
    function autoScroll() {
      if (!paused) {
        container.scrollLeft += speed;
        // When scroll reaches half the total width (i.e. the end of original items),
        // reset the scroll position to the beginning of the first set.
        if (container.scrollLeft >= track.scrollWidth / 2) {
          container.scrollLeft -= track.scrollWidth / 2;
        }
      }
      requestAnimationFrame(autoScroll);
    }
    autoScroll();
  });
  