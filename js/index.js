document.getElementById("buttonText").addEventListener("click", function () {
    event.preventDefault();
    const info = document.getElementById("inputText").value;
    localStorage.setItem("item", info);
    document.getElementById("inputText").value = "";
});
