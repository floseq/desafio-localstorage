document.addEventListener("DOMContentLoaded", function () {
    const item = localStorage.getItem("item");

    document.getElementById("data").textContent = item;
});
