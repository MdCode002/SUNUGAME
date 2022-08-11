const menuderou = document.querySelector("#menuderou");
const btn = document.querySelector(".btn");
const menu = document.querySelector(".nav-link");
const popupback = document.querySelector(".popupback");
const croix = document.querySelector("#croix");
x = null;
menuderou.addEventListener("click", () => {
  menu.classList.toggle("mobile-menu");
  console.log("zedfghj");
});
if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  x = 0;
} else {
  x = 1;
  console.log("PC");
}

btn.addEventListener("click", () => {
  if (x == 1) {
    popupback.classList.add("animpopup");
    console.log("sdsd");
  }
});
croix.addEventListener("click", () => {
  popupback.classList.remove("animpopup");
});
