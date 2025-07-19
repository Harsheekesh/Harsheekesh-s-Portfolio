function opentab(tabname) {
      var tablinks = document.getElementsByClassName("tab-links");
      var tabcontents = document.getElementsByClassName("tab-contemts");

      for (tablink of tablinks) {
        tablink.classList.remove("active-link");
      }

      for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
      }

      event.currentTarget.classList.add("active-link");
      document.getElementById(tabname).classList.add("active-tab");
    }

    const navMenu = document.getElementById("navMenu");

    function openMenu() {
      navMenu.classList.add("active");
    }

    function closeMenu() {
      navMenu.classList.remove("active");
    }

    document.addEventListener("click", function (event) {
      const isClickInsideMenu = navMenu.contains(event.target);
      const isClickOnHamburger = event.target.classList.contains("fa-bars");

      if (!isClickInsideMenu && !isClickOnHamburger && navMenu.classList.contains("active")) {
        closeMenu();
      }
    });


              const scriptURL = 'https://script.google.com/macros/s/AKfycby6_yTSehw59PRgE1-AhiYkVXUINRQFJQEEiD00aiVqsJvRIC1xhIhMp2YJzg0veyu8Lw/exec';
              const form = document.forms['submit-to-google-sheet'];
              const msg = document.getElementById("msg");

              form.addEventListener('submit', e => {
                e.preventDefault();
                fetch(scriptURL, { 
                  method: 'POST', 
                  body: new FormData(form)
                })
                .then(response => {
                  msg.innerHTML = "Message sent successfully";
                  setTimeout(function() {
                    msg.innerHTML = "";
                  }, 5000);
                  form.reset();
                })
                .catch(error => {
                  console.error('Error!', error.message);
                  msg.innerHTML = "Error sending message. Please try again.";
                  setTimeout(function() {
                    msg.innerHTML = "";
                  }, 5000);
                });
              });