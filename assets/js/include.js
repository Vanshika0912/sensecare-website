// Load Header
fetch("header.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;

    // ✅ Highlight current page in navbar
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll("#navmenu a");
    navLinks.forEach(link => {
      const href = link.getAttribute("href");
      if (href === currentPage || (href === "index.html" && currentPage === "")) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });

    // ✅ Mobile nav toggle functionality (Bootstrap-friendly)
    const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
    const navMenu = document.querySelector("#navmenu ul");

    if (mobileNavToggle && navMenu) {
      mobileNavToggle.addEventListener("click", function () {
        // Toggle visibility
        navMenu.classList.toggle("d-block");
        // Toggle icon between hamburger and cross
        this.classList.toggle("bi-list");
        this.classList.toggle("bi-x");
      });

      // Close menu when any nav link is clicked (optional)
      navLinks.forEach(link => {
        link.addEventListener("click", () => {
          navMenu.classList.remove("d-block");
          mobileNavToggle.classList.add("bi-list");
          mobileNavToggle.classList.remove("bi-x");
        });
      });
    }
  })
  .catch(error => console.error("Error loading header:", error));

// Load Footer
fetch("footer.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;
  })
  .catch(error => console.error("Error loading footer:", error));

  // // Load Header
// fetch("header.html")
//   .then(response => response.text())
//   .then(data => {
//     document.getElementById("header").innerHTML = data;

//     // ✅ Highlight current page
//     const currentPage = window.location.pathname.split("/").pop();
//     const navLinks = document.querySelectorAll("#navmenu a");
//     navLinks.forEach(link => {
//       const href = link.getAttribute("href");
//       if (href === currentPage || (href === "index.html" && currentPage === "")) {
//         link.classList.add("active");
//       } else {
//         link.classList.remove("active");
//       }
//     });

//     // ✅ Mobile Navbar Toggle (fixed behavior)
//     const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
//     const navMenu = document.querySelector("#navmenu ul");

//     if (mobileNavToggle && navMenu) {
//       mobileNavToggle.addEventListener("click", function () {
//         const isActive = navMenu.classList.toggle("navmenu-active");
//         this.classList.toggle("bi-list", !isActive);
//         this.classList.toggle("bi-x", isActive);
//       });
//     }
//   })
//   .catch(error => console.error("Error loading header:", error));

// // Load Footer
// fetch("footer.html")
//   .then(response => response.text())
//   .then(data => {
//     document.getElementById("footer").innerHTML = data;
//   })
//   .catch(error => console.error("Error loading footer:", error));
