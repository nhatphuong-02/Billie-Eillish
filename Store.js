function more_items() {
  const more = document.getElementById("more-items");
  const notification = document.getElementById("notification");
  const btn = event.target;

  if (more.style.display === "none" || more.style.display === "") {
    more.style.display = "block";
    btn.style.display = "none";
    notification.innerText = "showing 16 of 16 total";
  } else {
    more.style.display = "none";
  }
}
