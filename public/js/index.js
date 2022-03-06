const btn = document.querySelector(".up-btn");
if (window.pageYOffset > 0) {
    btn.style.display = "flex";
}
window.onscroll = () => {
    if (window.pageYOffset > 0) {
        btn.style.display = "flex";
    }
    else {
        btn.style.display = "none";
    }
}