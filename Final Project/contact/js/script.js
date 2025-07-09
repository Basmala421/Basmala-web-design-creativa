   const scrollBtn = document.getElementById("scrollToTop");

  
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  });
  
  
  
  function validateForm() {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const subject = document.getElementById("subject");
  const formContainer = document.getElementById("form-container"); 
  const formError = document.getElementById("form-error-message");
  const againMessage = document.getElementById("again-message");
  const emailErrorDiv = document.getElementById("email-error");

  let isValid = true;

  
  [name, email, subject].forEach(input => {
    input.classList.remove("is-invalid");
  });

  formContainer.classList.remove("border-yellow", "border-red");
  formError.classList.add("hidden-message");
  againMessage.classList.add("hidden-message");

  
  if (name.value.trim() === "") {
    name.classList.add("is-invalid");
    isValid = false;
  }

  
  if (email.value.trim() === "") {
    email.classList.add("is-invalid");
    emailErrorDiv.textContent = "The field is required";
    isValid = false;
  } else if (!validateEmail(email.value.trim())) {
    email.classList.add("is-invalid");
    emailErrorDiv.textContent = "The email address entered is invalid";
    isValid = false;
  }

  
  if (subject.value.trim() === "") {
    subject.classList.add("is-invalid");
    isValid = false;
  }

  
  if (!isValid) {
    formContainer.classList.add("border-yellow");
    formError.classList.remove("hidden-message");
    againMessage.classList.remove("hidden-message");
  } else {
    formContainer.classList.add("border-red");
  }
}


function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}