document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const alertContainer = document.getElementById("alertContainer");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      event.stopPropagation();
  
      if (form.checkValidity()) {
        showAlert("Form submitted successfully!", "success");
        resetForm();
      } else {
        showAlert("Please fill out all required fields.", "danger");
        form.classList.add("was-validated"); 
      }
    });
  
    function showAlert(message, type) {
      alertContainer.innerHTML = `
        <div class="alert alert-${type} alert-dismissible fade show" role="alert">
          ${message}
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      `;
    }
  
    function resetForm() {
      form.classList.remove("was-validated"); 
      form.reset(); 
    }
  });
  