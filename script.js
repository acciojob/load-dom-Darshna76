//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
  const message = 'DOM load success';
  const p = document.createElement('p');
  p.textContent = message;
  document.body.appendChild(p);
});