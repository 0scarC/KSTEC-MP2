const navbar = document.querySelector(".navbar");
const menuToggle = document.querySelector(".menu-toggle");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("open");
});

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

//Get the Nav Button \\
const mybutton = document.getElementById("navbutton");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

