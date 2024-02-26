const passwordInput = document.getElementById('password');
const emoji = document.querySelector('.emoji');

passwordInput.addEventListener('input', function() {
  if (this.value.length > 0) {
    emoji.innerHTML = "🙈";
  } else {
    emoji.innerHTML = "👦";
  }
});
