window.addEventListener("DOMContentLoaded", function() {
  var FORM = document.getElementById("contact-form_js");
  var FORM_BTN = document.getElementById("contact-form-submit_js");
  var FORM_STATUS = document.getElementById("contact-form-status_js");

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
    var data = new FormData(FORM);
    ajax(FORM.method, FORM.action, data, success, error);
  });
});

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
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
