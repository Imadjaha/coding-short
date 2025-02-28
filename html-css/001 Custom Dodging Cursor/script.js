document.addEventListener("DOMContentLoaded", () => {
  const cursor = document.querySelector(".cursor");
  const buttons = document.querySelectorAll("button");

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;

    let isNearButton = false;

    buttons.forEach((button) => {
      const rect = button.getBoundingClientRect();
      if (
        e.clientX > rect.left - 20 &&
        e.clientX < rect.right + 20 &&
        e.clientY > rect.top - 20 &&
        e.clientY < rect.bottom + 20
      ) {
        isNearButton = true;
      }
    });

    // Apply "dodge" effect
    if (isNearButton) {
      cursor.style.transform = "scale(2)";
    } else {
      cursor.style.transform = "scale(1)";
    }
  });
});
