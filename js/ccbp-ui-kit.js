function display(sectionId) {
  // Hide all sections
  document.querySelectorAll("div[id^='section']").forEach(sec => {
    sec.style.display = "none";
  });

  // Show the requested section
  document.getElementById(sectionId).style.display = "block";
}

// By default show home section
window.onload = function() {
  display("sectionHome");
};
