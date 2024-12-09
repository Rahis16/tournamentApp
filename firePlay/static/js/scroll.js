 // Cache DOM elements
 const navbar = document.querySelector('.navbar'); // Your navbar class
 const filterSection = document.querySelector('.filter-section'); // Your filter section class
 let lastScrollTop = 0; // To store the last scroll position

 window.addEventListener('scroll', () => {
   let currentScroll = window.scrollY; // Current scroll position

   // If scrolling down and scroll position is > 500px, hide navbar
   if (currentScroll > lastScrollTop && currentScroll > 600) {
     navbar.classList.remove('scroll-down');
     navbar.classList.add('scrollup');
     
     // When scrolling down > 600px, make the filter section fixed
     if (currentScroll > 610) {
        // filterSection.classList.remove('scroll-up');
        filterSection.classList.add('scroll-down');
        filterSection.style.position = 'fixed'; // Filter section becomes fixed at the top
        filterSection.style.top = '-70'; // Fixed at the top
     }
   } 
   // If scrolling up, show the navbar
   else if (currentScroll < lastScrollTop) {
     navbar.classList.remove('scrollup');
     navbar.classList.add('scroll-down');
     
     // Filter section becomes relative when scrolling up
     filterSection.classList.remove('scroll-down'); // Remove the fixed position
    //  filterSection.classList.add('scroll-up');
     filterSection.style.position = 'relative';
   }

   // Update the last scroll position
   lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
 });
