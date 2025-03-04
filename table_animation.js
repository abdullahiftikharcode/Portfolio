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
  