document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(b => b.classList.remove("active"));
    button.classList.add("active");
    const chosen = button.dataset.filter;
    document.querySelectorAll(".project-card").forEach(card => {
      card.hidden = chosen !== "All" && card.dataset.category !== chosen;
    });
  });
});
const dialog=document.querySelector(".lightbox");
const dialogImage=dialog.querySelector("img");
document.querySelectorAll(".project-visual").forEach(button => {
  button.addEventListener("click", () => {
    dialogImage.src=button.dataset.full;
    dialogImage.alt=button.getAttribute("aria-label") || "Portfolio project";
    dialog.showModal();
  });
});
dialog.querySelector(".close").addEventListener("click",()=>dialog.close());
dialog.addEventListener("click",e=>{if(e.target===dialog)dialog.close();});
const toggle=document.querySelector(".menu-toggle");
const nav=document.querySelector(".nav");
toggle.addEventListener("click",()=>{
  const open=nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded",String(open));
});
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{
  nav.classList.remove("open");toggle.setAttribute("aria-expanded","false");
}));
