const buttons = document.querySelectorAll("nav button");
const pages = document.querySelectorAll(".page");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetId = btn.getAttribute("data-page");

    buttons.forEach(b => b.classList.remove("active-tab"));
    btn.classList.add("active-tab");

    pages.forEach(page => {
      page.classList.remove("active");
      if (page.id === targetId) {
        page.classList.add("active");
      }
    });
  });
});

// Start on Celebration page
document.querySelector('button[data-page="celebration"]').classList.add("active-tab");
