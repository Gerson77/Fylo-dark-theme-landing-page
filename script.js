document.getElementById("submitBtn").addEventListener("click", function () {
  const emailInput = document.getElementById("emailInput");
  const messageSpan = document.getElementById("error-message");
  const email = emailInput.value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "") {
    messageSpan.textContent = "Email is required";
    messageSpan.style.display = "block";
    emailInput.focus();
    return;
  }

  if (!emailRegex.test(email)) {
    messageSpan.textContent = "Please enter a valid email address";
    messageSpan.style.display = "block";
    emailInput.focus();
  } else {
    messageSpan.style.display = "block";
    messageSpan.textContent = "Email is valid! 🥳";
    messageSpan.style.color = '#65e26b'
  }
});


const goTopBtn = document.querySelector('.go-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    goTopBtn.style.opacity = '1';
    goTopBtn.style.visibility = 'visible';
  } else {
    goTopBtn.style.opacity = '0';
    goTopBtn.style.visibility = 'hidden';
  }
});

goTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});