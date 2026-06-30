
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        themeBtn.innerHTML = "☀️";
    }
    else{
        themeBtn.innerHTML = "🌙";
    }

});


const form = document.querySelector(".contact-form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name =
    form.querySelector('input[type="text"]').value.trim();

    const email =
    form.querySelector('input[type="email"]').value.trim();

    const message =
    form.querySelector("textarea").value.trim();

    if(name === "" || email === "" || message === ""){

        alert("Please fill all fields.");

        return;
    }

    const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){

        alert("Please enter a valid email.");

        return;
    }

const successMessage =
document.getElementById("formMessage");

successMessage.innerHTML =
"✅ Message Sent Successfully!";

successMessage.style.color = "green";
successMessage.style.fontWeight = "bold";
successMessage.style.textAlign = "center";
successMessage.style.marginTop = "20px";

form.reset();

setTimeout(() => {

successMessage.innerHTML = "";

},3000);

});



const revealElements =
document.querySelectorAll(
".card,.feature,.project-card,.testimonial"
);

function revealOnScroll(){

    revealElements.forEach((element)=>{

        const windowHeight =
        window.innerHeight;

        const elementTop =
        element.getBoundingClientRect().top;

        if(elementTop < windowHeight - 100){

            element.style.opacity = "1";

            element.style.transform =
            "translateY(0)";
        }

    });

}

revealElements.forEach((element)=>{

    element.style.opacity = "0";

    element.style.transform =
    "translateY(60px)";

   element.style.transition =
   "all 1s ease";

});

window.addEventListener(
"scroll",
revealOnScroll
);

revealOnScroll();
const sections =
document.querySelectorAll("section");

const navItems =
document.querySelectorAll(".nav-links a");


    window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop =
        section.offsetTop - 150;

      if(window.scrollY >= sectionTop){

            current =
            section.getAttribute("id");

        }

    });

    navItems.forEach((link)=>{

        link.classList.remove("active-link");

        if(
        link.getAttribute("href")
        === "#" + current
        ){

            link.classList.add("active-link");

        }

    });

});
// ======================
// NAVBAR SHADOW
// ======================

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        document.querySelector(".header").style.boxShadow =
        "0 8px 20px rgba(0,0,0,.15)";

    } else {

        document.querySelector(".header").style.boxShadow =
        "0 2px 10px rgba(0,0,0,.05)";

    }

});



// ======================
// SMOOTH SCROLL
// ======================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        document.querySelector(
            this.getAttribute("href")
        ).scrollIntoView({

            behavior: "smooth"

        });

    });

});