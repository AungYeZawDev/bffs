document.addEventListener("mousemove", function(event) {
  var cursor = document.querySelector(".cursor");
  cursor.style.left = event.clientX + "px";
  cursor.style.top = event.clientY + "px";
  cursor.style.opacity = 1;

  setTimeout(function() {
    cursor.style.opacity = 0;
  }, 300);
});
