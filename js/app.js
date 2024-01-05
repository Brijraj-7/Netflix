// Netflix singin button
const sing = document.getElementById("singBtn");

try {
  sing.addEventListener("click", () => {
    var href = "../Netflix/Netflixpage/singin.html";
    location.href = href;
  });
} catch {}

// Frequently Asked Questions buttons
const faqBtn = document.querySelectorAll(".faq-btn");

faqBtn.forEach((faqBtn) => {
  faqBtn.addEventListener("click", () => {
    const btncont = faqBtn.parentNode.querySelector(".faqcontbox");
    btncont.classList.toggle("faqcontbox1");
    console.log("hello");
  });
});

// Netfilx Singin id pass.
const formData = {
  formId: "1234",
  password: "1234",
};

try {
  function verifyFormData() {
    const formId = document.getElementById("formId").value;
    const password = document.getElementById("password").value;

    if (formId === formData.formId && password === formData.password) {
      window.location.href = "../Netflixpage/browse.html";
    } else {
      alert("Invalid form Email or phone number or password");
    }
  }

  document
    .getElementById("singinBtn")
    .addEventListener("click", verifyFormData);
} catch {}
