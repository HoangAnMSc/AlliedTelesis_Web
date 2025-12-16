document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const btn = document.querySelector(".js-toggle-menu");
  const menu = document.getElementById("mega_menu");
  if (!header || !btn || !menu) return;

  const openMenu = () => {
    header.classList.add("is_menu_open");
    btn.setAttribute("aria-expanded", "true");
    menu.setAttribute("aria-hidden", "false");
    // document.body.style.overflow = "hidden";
  };

  const closeMenu = () => {
    header.classList.remove("is_menu_open");
    btn.setAttribute("aria-expanded", "false");
    menu.setAttribute("aria-hidden", "true");
    // document.body.style.overflow = "";
  };

  const groups = document.querySelectorAll(".acc_group");
  if (!groups.length) return;

  groups.forEach((group) => {
    const title = group.querySelector("h3");

    if (!title) {
      group.classList.add("is_open");
      group.classList.add("is_static_open");
      return;
    }

    title.addEventListener("click", () => {
      const isOpen = group.classList.contains("is_open");
      groups.forEach((g) => {
        if (!g.classList.contains("is_static_open")) {
          g.classList.remove("is_open");
        }
      });

      if (!isOpen) {
        group.classList.add("is_open");
      }
    });
  });


  const overlay = document.getElementById("menu_overlay");

  if (overlay) {
    overlay.addEventListener("click", closeMenu);
  }


  btn.addEventListener("click", () => {
    const isOpen = header.classList.contains("is_menu_open");
    if (isOpen) closeMenu();
    else openMenu();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
});
