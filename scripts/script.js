document.addEventListener("DOMContentLoaded", () => {
  const phoneInput = document.getElementById("phone-input");

  const phoneMask = IMask(phoneInput, {
    mask: "+{7} (000) 000-00-00",
    lazy: true,
  });

  const emailInput = document.getElementById("email-input");

  emailInput.addEventListener("input", function () {
    this.value = this.value.replace(/[^a-zA-Z0-9@._-]/g, "");
  });

  emailInput.addEventListener("blur", function () {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (this.value !== "" && !emailPattern.test(this.value)) {
      this.style.borderColor = "red";
    } else {
      this.style.borderColor = "#ccc";
    }
  });
});
