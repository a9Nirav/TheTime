(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Fixed Navbar
    // $(window).scroll(function () {
    //     if ($(window).width() < 992) {
    //         if ($(this).scrollTop() > 45) {
    //             $('.fixed-top').addClass('my-bg shadow');
    //         } else {
    //             $('.fixed-top').removeClass('my-bg shadow');
    //         }
    //     } else {
    //         if ($(this).scrollTop() > 45) {
    //             $('.fixed-top').addClass('my-bg shadow').css('top', -45);
    //         } else {
    //             $('.fixed-top').removeClass('my-bg shadow').css('top', 0);
    //         }
    //     }
    // });




    
    // window.addEventListener("scroll", function () {
    //     var navbar = document.querySelector(".navbar");
    //     if (window.scrollY > 100) { // Adjust as needed
    //         navbar.classList.add("scrolled");
    //     } else {
    //         navbar.classList.remove("scrolled");
    //     }
    // });


    
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 100, 'easeInOutExpo');
        return false;
    });


    // Causes progress
    $('.causes-progress').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });

    
})(jQuery);


// for phone view class name change

function switchClassBasedOnScreenSize() {
    var element = document.getElementById('myElement');
    if (window.innerWidth <= 600) {
        element.className = 'container';
        // element.className = 'background1';
    }
    else if (window.innerWidth <= 1400) {
        element.className = 'container-xll';
        // element.className = 'background1';
    }
     else {
        // element.className = 'container-fluid';
        // element.className = 'background1';
    }
}

// Call the function on page load and on window resize
window.addEventListener('load', switchClassBasedOnScreenSize);
window.addEventListener('resize', switchClassBasedOnScreenSize);



// form data 






    // const scriptURL = 'https://script.google.com/macros/s/AKfycbw5LDXItxswTE8jhVGXpL0U4iuZOHUXcEDCQqBp_NMrcS2MhlSIsO3rLGaLljY7GAGv/exec'
    // const form = document.forms['google-sheet']
    
    //             form.addEventListener('submit', e => {
        
    //                 e.preventDefault()
    //                 fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    //                   .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
    //                   .catch(error => console.error('Error!', error.message))
    //               })






                  const scriptURL = 'https://script.google.com/macros/s/AKfycbw5LDXItxswTE8jhVGXpL0U4iuZOHUXcEDCQqBp_NMrcS2MhlSIsO3rLGaLljY7GAGv/exec';
                  const form = document.forms['google-sheet'];
                  const submitButton = document.getElementById('submitButton');
          
                  form.addEventListener('submit', e => {
                      e.preventDefault(); // Prevent the default form submission
          
                      // Check if the form is valid
                      if (validateForm()) {
                          fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                              .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
                              .catch(error => console.error('Error!', error.message));
                      }
                  });
          
                  // Validation Functions
                  function validateUsername() {
                      const username = document.getElementById("username").value;
                      if (!username) {
                          showError("usernameError", "Name is required.");
                      } else {
                          clearError("usernameError");
                      }
                  }
          
                  function validateEmail() {
                      const email = document.getElementById("email").value;
                      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                      if (!emailPattern.test(email)) {
                          showError("emailError", "Please enter a valid email address.");
                      } else {
                          clearError("emailError");
                      }
                  }
          
                  function validateDate() {
                      const date = document.getElementById("date").value;
                      if (!date) {
                          showError("dateError", "Event date is required.");
                      } else {
                          clearError("dateError");
                      }
                  }
          
                  function validatePhone() {
                      const phone = document.getElementById("Phone").value;
                      if (phone.length < 10) {
                          showError("phoneError", "Please enter a valid phone number.");
                      } else {
                          clearError("phoneError");
                      }
                  }
          
                  function validateLocation() {
                      const location = document.getElementById("Location").value;
                      if (!location) {
                          showError("locationError", "Location is required.");
                      } else {
                          clearError("locationError");
                      }
                  }
          
                  function validateMessage() {
                      const message = document.getElementById("message").value;
                      if (!message) {
                          showError("messageError", "Message is required.");
                      } else {
                          clearError("messageError");
                      }
                  }
          
                  // Show error message
                  function showError(errorId, message) {
                      const errorElement = document.getElementById(errorId);
                      errorElement.textContent = message;
                      errorElement.style.display = "block"; // Show error message
                  }
          
                  // Clear error message
                  function clearError(errorId) {
                      const errorElement = document.getElementById(errorId);
                      errorElement.textContent = "";
                      errorElement.style.display = "none"; // Hide error message
                  }
          
                  // Final validation on form submit
                  function validateForm() {
                      clearErrors(); // Clear all previous error messages
          
                      let valid = true; // Track overall form validity
          
                      // Run individual field validations
                      validateUsername();
                      validateEmail();
                      validateDate();
                      validatePhone();
                      validateLocation();
                      validateMessage();
          
                      // Check if at least one service is selected
                      const services = document.querySelector('input[name="services"]:checked');
                      if (!services) {
                          showError("serviceError", "Please select at least one service.");
                          valid = false;
                      } else {
                          clearError("serviceError");
                      }
          
                      return valid; // Return overall validity status
                  }
          
                  // Function to clear all error messages
                  function clearErrors() {
                      const errorMessages = document.querySelectorAll(".error-message");
                      errorMessages.forEach(error => {
                          error.textContent = "";
                          error.style.display = "none"; // Hide the error message
                      });
                  }





// logo 


// document.addEventListener('DOMContentLoaded', function() {
//     const logo = document.querySelector('.logo-default');
//     const logoScrolled = document.querySelector('.logo-scrolled');

//     window.addEventListener('scroll', function() {
//         if (window.scrollY > 50) { // Adjust the value as needed
//             logo.style.opacity = '0';
//             logoScrolled.style.opacity = '1';
//         } else {
//             logo.style.opacity = '1';
//             logoScrolled.style.opacity = '0';
//         }
//     });
// });



// document.addEventListener('scroll', function() {
//     var logo = document.getElementById('logo');
//     // var logoText = document.getElementById("logo-text");
//     if (window.scrollY > 50) {
//         logo.src = 'img/new-img/TTHS FINAL LOGO 02-01.png'; // New logo after scrolling down
//         // logo.style.height = '100px'; // Set height to 80px
//         // logo.style.width = '200px'; // Set width to 150px
//         logoText.style.display = 'block'; // Show the text
     
//     } else {
//         logo.src = 'img/new-img/new-logo.png'; // Original logo
//         // logo.style.height = '100px'; // Set height to 100px
//         // logo.style.width = '75px'; // Set width to 80px
//         logoText.style.display = 'none'; // Hide the text
//     }
// });




// document.addEventListener('scroll', function() {
//     var logo = document.getElementById('logo');
//     if (window.scrollY > 100) { // Change 100 to the scroll position you want
//         logo.src = 'img/new-img/logo-scrolled.png';
//     } else {
//         logo.src = 'img/new-img/logo-default.png';
//     }
// });


// function debounce(func, wait) {
//     let timeout;
//     return function(...args) {
//         clearTimeout(timeout);
//         timeout = setTimeout(() => func.apply(this, args), wait);
//     };
// }

















