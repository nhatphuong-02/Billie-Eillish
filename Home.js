function openStore(id) {
  const all = document.querySelectorAll(".products");
  all.forEach((el) => (el.style.display = "none"));

  const choose = document.getElementById(id);
  choose.style.display = "flex";

  document.querySelectorAll(".choice .title").forEach((t) => {
    t.classList.remove("active");
  });
  event.target.classList.add("active");
}

document.addEventListener("DOMContentLoaded", () => {
  const tickets = document.querySelectorAll(".ticket");
  const order = document.getElementById("order");

  tickets.forEach((e) => {
    e.onclick = () => {
      order.style.display = "flex";
    };
    order.onclick = (e) => {
      if (e.target === order) {
        order.style.display = "none";
      }
    };
  });
});