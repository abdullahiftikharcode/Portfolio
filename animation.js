
//to trigger animation for table when it gets in view 
document.addEventListener("DOMContentLoaded", function () {
    const tableRows = document.querySelectorAll(".table-dark tbody tr");
  
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target); 
          }
        });
      },
      { threshold: 0.2 }
    );
  
    tableRows.forEach((row) => observer.observe(row));
  });
  //to trigger animation for skills bar when it gets in view
  document.addEventListener("DOMContentLoaded", () => {
    const skillsSection = document.querySelector(".skills-section");

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("Skills section is in view. Starting animation.");
            // Start the fill animations
            skillsSection.classList.add("animate");

            // After the fill animation (2 seconds + a brief delay), reveal each label
            setTimeout(() => {
              console.log("Revealing percentage labels.");
              skillsSection.querySelectorAll('.skill-label').forEach(label => {
                label.classList.add("visible");
              });
            }, 2100);

            observer.unobserve(skillsSection);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (skillsSection) {
      observer.observe(skillsSection);
    }
  });