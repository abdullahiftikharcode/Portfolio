document.querySelectorAll(".nav_item").forEach((element) => {
    element.addEventListener("mouseenter", () => {
        if (element.dataset.scrambling) return; // Prevent multiple intervals
        element.dataset.scrambling = "true"; 

        let originalText = element.dataset.text; 
        let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
        let iterations = 0;
        let maxIterations = originalText.length; // Adjust for effect timing

        let interval = setInterval(() => {
            element.textContent = originalText
                .split("")
                .map((char, i) =>
                    i < iterations ? char : chars[Math.floor(Math.random() * chars.length)]
                )
                .join("");

            if (iterations >= originalText.length) {
                clearInterval(interval);
                element.textContent = originalText; 
                element.dataset.scrambling = ""; // Reset flag
            }
            iterations++;
        }, 50);
    });
});
