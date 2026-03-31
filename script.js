

document.getElementById("year").textContent = new Date().getFullYear();


window.addEventListener("scroll", function () {
    var nav = document.getElementById("mainNav");
    if (window.scrollY > 50) {
        nav.style.boxShadow = "0 4px 20px rgba(0,0,0,0.5)";
    } else {
        nav.style.boxShadow = "none";
    }
});


var sections  = document.querySelectorAll("section[id]");
var navLinks  = document.querySelectorAll(".nav-link");

var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            navLinks.forEach(function (link) { link.classList.remove("active"); });
            var activeLink = document.querySelector('.nav-link[href="#' + entry.target.id + '"]');
            if (activeLink) { activeLink.classList.add("active"); }
        }
    });
}, { threshold: 0.35 });

sections.forEach(function (section) { observer.observe(section); });


var navLinks2   = document.querySelectorAll(".nav-link");
var navCollapse = document.getElementById("navMenu");

navLinks2.forEach(function (link) {
    link.addEventListener("click", function () {
        if (navCollapse.classList.contains("show")) {
            var bsCollapse = bootstrap.Collapse.getOrCreateInstance(navCollapse);
            bsCollapse.hide();
        }
    });
});


var sendBtn = document.getElementById("sendBtn");
var formMsg = document.getElementById("formMsg");

sendBtn.addEventListener("click", function () {
    var name    = document.getElementById("name").value.trim();
    var email   = document.getElementById("email").value.trim();
    var subject = document.getElementById("subject").value.trim();
    var message = document.getElementById("message").value.trim();

    if (!name || !email || !subject || !message) {
        formMsg.style.display = "block";
        formMsg.style.color   = "#f87171";
        formMsg.textContent   = "⚠ Please fill in all fields before sending.";
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        formMsg.style.display = "block";
        formMsg.style.color   = "#f87171";
        formMsg.textContent   = "⚠ Please enter a valid email address.";
        return;
    }

    formMsg.style.display = "block";
    formMsg.style.color   = "#4ade80";
    formMsg.textContent   = "✅ Message sent! I'll get back to you soon.";

    document.getElementById("name").value    = "";
    document.getElementById("email").value   = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";
});


var scrollTopBtn = document.createElement("button");
scrollTopBtn.id = "scrollTop";
scrollTopBtn.setAttribute("aria-label", "Scroll to top");
scrollTopBtn.innerHTML = '<i class="bi bi-arrow-up"></i>';
document.body.appendChild(scrollTopBtn);

window.addEventListener("scroll", function () {
    if (window.scrollY > 400) {
        scrollTopBtn.style.display = "flex";
    } else {
        scrollTopBtn.style.display = "none";
    }
});

scrollTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
