document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if(user === "admin" && pass === "RonnyIsCool"){
        alert("Login Successful");
        window.location.href = "page1.html"
    } else {
        alert("Invalid credentials");
    }
});

const toggle = document.getElementById('toggle');
const pwd = document.getElementById('password');

toggle.addEventListener("click", () => {
    if (pwd.type === "password") {
        pwd.type = "text";
        toggle.classList.replace("fa-eye", "fa-eye-slash");
    } else {
        pwd.type = "password";

    toggle.classList.replace("fa-eye-slash", "fa-eye");
    }
});