const FORM_CONSTRAINTS = {
  name: {
    required: "Name can't be empty"
  },
  message: {
    required: "Message can't be empty"
  },
  "reply-to": {
    required: "Email can't be empty",
    valid: "Hook us up with a valid email"
  }
};

window.addEventListener("DOMContentLoaded", function() {
  const FORM = document.getElementById("contact-form_js");
  const FORM_BTN = document.getElementById("contact-form-submit_js");
  const FORM_STATUS = document.getElementById("contact-form-status_js");

  function success() {
    FORM.reset();
    FORM_BTN.style = "display: none ";
    FORM_STATUS.innerHTML = FORM.dataset.success;
  }

  function error() {
    FORM_STATUS.innerHTML = FORM.dataset.error;
  }

  FORM.addEventListener("submit", function(event) {
    event.preventDefault();

    let isValid = event.target.checkValidity();

    if (isValid) {
      const data = new FormData(FORM);
      ajax(FORM.method, FORM.action, data, success, error);
    } else {
      handleError(event.target);
    }
  });
});

function showInputError(el, message) {
  const formGroup = el.closest(".form-group");
  const errorEl = formGroup && formGroup.querySelector(".form-error");

  if (!errorEl) return;

  el.classList.add("has-error");
  errorEl.textContent = message;
}

function handleError(el) {
  const formInputs = el.elements;

  function checkValididity(el) {
    if (el.validity.valid && el.value) {
      showInputError(el, "");
      el.classList.remove("has-error");
    } else if (el.validity.valueMissing) {
      showInputError(el, FORM_CONSTRAINTS[el.name].required);
    } else if (el.validity.typeMismatch) {
      showInputError(el, FORM_CONSTRAINTS[el.name].valid);
    }
  }

  [...formInputs].forEach(el => {
    checkValididity(el);

    el.addEventListener("input", () => {
      checkValididity(el);
    });
  });
}

function ajax(method, url, data, success, error) {
  let xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}
